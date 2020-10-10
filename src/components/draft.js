import React, { Component } from 'react';
import 'draft-js/dist/Draft.css';
import debounce from 'lodash/debounce';
import {
	Editor,
	EditorState,
	RichUtils,
	convertFromRaw,
	convertToRaw,
	getDefaultKeyBinding,
	KeyBindingUtil
} from 'draft-js';
import { withStyles } from "@material-ui/core/styles";
import "./style.css"
const { hasCommandModifier } = KeyBindingUtil;


const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.primary.dark
    },
    mainDiv: {
        paddingTop: "50px",
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "300px",
        alignContent: "center",
    },
    items: {
        width: "100%",
    },
    buttonCollapse: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        },
        margin: "5px",
        boxShadow: "none",
        marginRight: "10px",
    },
    MenuButton: {
        color: theme.palette.background.primary.light,
        fontSize: "35px",
    },
});


function myKeyBindingFn(e: SyntheticKeyboardEvent): string {
	if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
		return 'myeditor-save';
	}
	return getDefaultKeyBinding(e);
}

const MAX_LENGTH = 10;

class RichEditorExample extends Component {
	constructor(props) {
		super(props);

		if (props.my_func) {
			this.my_func = props.my_func
		}

		console.log(props.raw_state)

		if (props.raw_state) {
			console.log('Raw State Prop present', props.raw_state)
			this.state = {
				editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(props.raw_state)))
			};
		} else {

			this.state = {
				editorState: EditorState.createEmpty()
			};

		}

		this.onChange = this.onChange.bind(this);
		this._getLengthOfSelectedText = this._getLengthOfSelectedText.bind(this);
		this._handleBeforeInput = this._handleBeforeInput.bind(this);

		this.focus = () => this.refs.editor.focus();

		//this.handleKeyCommand = (command) => this._handleKeyCommand(command);
		this.handleKeyCommand = this.handleKeyCommand.bind(this);
		this.onTab = (e) => this._onTab(e);
		this.toggleBlockType = (type) => this._toggleBlockType(type);
		this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
	}

	set_editor(raw_state) {
		this.setState({
			editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(raw_state)))
		})
	}

	my_func() {
		console.log('My Function is Running')
	}

	handleKeyCommand(command: string): DraftHandleValue {
		if (command === 'myeditor-save') {
			// Perform a request to save your contents, set
			// a new `editorState`, etc.
			var raw_content = convertToRaw(this.state.editorState.getCurrentContent());
			//var raw_state = convertToRaw(this.state.editorState);
			// window.localStorage.setItem('content', JSON.stringify(raw_content));
			// this.state = {
			//     editorState: EditorState.createEmpty(),
			// };

			this.my_func(JSON.stringify(raw_content))

			console.log('saved', raw_content)
			return 'handled';
		}
		return 'not-handled';
	}

	onChange = (editorState) => {
		const contentState = editorState.getCurrentContent();
		//console.log('content state', convertToRaw(contentState));
		this.saveContent(contentState);
		this.setState({ editorState });
	}

	saveContent = debounce((content) => {
		window.localStorage.setItem('content', JSON.stringify((convertToRaw(content))));
	}, 1000);

	_getLengthOfSelectedText = () => {
		console.log('say');
		const currentSelection = this.state.editorState.getSelection();
		const isCollapsed = currentSelection.isCollapsed();

		let length = 0;

		if (!isCollapsed) {
			const currentContent = this.state.editorState.getCurrentContent();
			const startKey = currentSelection.getStartKey();
			const endKey = currentSelection.getEndKey();
			const isBackward = currentSelection.getIsBackward();
			const blockMap = currentContent.getBlockMap();
			const startBlock = currentContent.getBlockForKey(startKey);
			const endBlock = currentContent.getBlockForKey(endKey);
			const isStartAndEndBlockAreTheSame = startKey === endKey;
			const startBlockTextLength = startBlock.getLength();
			const endBlockTextLength = endBlock.getLength();
			const startSelectedTextLength = startBlockTextLength - currentSelection.getStartOffset();
			const endSelectedTextLength = currentSelection.getEndOffset();
			const keyAfterEnd = currentContent.getKeyAfter(endKey);

			if (isStartAndEndBlockAreTheSame) {
				length += currentSelection.getEndOffset() - currentSelection.getStartOffset();
			} else {
				let currentKey = startKey;
				let counter = 0;

				while (currentKey && currentKey !== keyAfterEnd) {
					if (currentKey === startKey) {
						length += startSelectedTextLength + 1;
					} else if (currentKey === endKey) {
						length += endSelectedTextLength;
					} else {
						length += currentContent.getBlockForKey(currentKey).getLength() + 1;
					}

					currentKey = currentContent.getKeyAfter(currentKey);
				};
			}
		}

		return length;
	}

	_handleBeforeInput = () => {
		console.log('hello');
		const currentContent = this.state.editorState.getCurrentContent();
		const currentContentLength = currentContent.getPlainText('').length

		if (currentContentLength > MAX_LENGTH - 1) {
			console.log('you can type max ten characters');

			return 'handled';
		}
	}

	_handlePastedText = (pastedText) => {
		const currentContent = this.state.editorState.getCurrentContent();
		const currentContentLength = currentContent.getPlainText('').length;
		const selectedTextLength = this._getLengthOfSelectedText();

		if (currentContentLength + pastedText.length - selectedTextLength > MAX_LENGTH) {
			console.log('you can type max ten characters');

			return 'handled';
		}
	}

	_handleKeyCommand(command) {
		const { editorState } = this.state;
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			this.onChange(newState);
			return true;
		}
		return false;
	}

	_onTab(e) {
		const maxDepth = 4;
		this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
	}

	_toggleBlockType(blockType) {
		this.onChange(
			RichUtils.toggleBlockType(
				this.state.editorState,
				blockType
			)
		);
	}

	_toggleInlineStyle(inlineStyle) {
		if(inlineStyle == 'SAVE') {
			var raw_content = convertToRaw(this.state.editorState.getCurrentContent());
			this.my_func(JSON.stringify(raw_content))
		} else {
			this.onChange(
				RichUtils.toggleInlineStyle(
					this.state.editorState,
					inlineStyle
				)
			);
		}
		
	}

	render() {
		const { editorState } = this.state;

		// If the user changes block type before entering any text, we can
		// either style the placeholder or hide it. Let's just hide it now.
		let className = 'RichEditor-editor';
		var contentState = editorState.getCurrentContent();
		if (!contentState.hasText()) {
			if (contentState.getBlockMap().first().getType() !== 'unstyled') {
				className += ' RichEditor-hidePlaceholder';
			}
		}


		if (!this.state.editorState) {
			return (
				<h3 className="loading">Loading...</h3>
			);
		}
		return (
			<div>
				<div className="RichEditor-root">
					<BlockStyleControls
						editorState={editorState}
						onToggle={this.toggleBlockType}
					/>
					<InlineStyleControls
						editorState={editorState}
						onToggle={this.toggleInlineStyle}
					/>
					<div className={className} style={{backgroundColor: 'white'}} onClick={this.focus}>
						<Editor
							blockStyleFn={getBlockStyle}
							
							customStyleMap={styleMap}
							editorState={editorState}
							handleKeyCommand={this.handleKeyCommand}
							onChange={this.onChange}
							onTab={this.onTab}
							placeholder="Tell a story..."
							keyBindingFn={myKeyBindingFn}
							ref="editor"
							spellCheck={true}
							my_func={this.my_func}
						/>
					</div>
				</div>
			</div>
		);

	}
}



// Custom overrides for "code" style.
const styleMap = {
	CODE: {
		backgroundColor: 'rgba(0, 0, 0, 0.05)',
		fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
		fontSize: 12,
		padding: 1,
	},
};

function getBlockStyle(block) {
	switch (block.getType()) {
		case 'blockquote': return 'RichEditor-blockquote';
		default: return null;
	}
}



class StyleButton extends React.Component {
	constructor() {
		super();
		this.onToggle = (e) => {
			e.preventDefault();
			this.props.onToggle(this.props.style);
		};
	}

	render() {
		let className = 'RichEditor-styleButton ui button';
		if (this.props.active) {
			className += ' RichEditor-activeButton';
		}

		return (
			<span className={className} onMouseDown={this.onToggle}>
				{this.props.label}
			</span>
		);
	}
}



const BLOCK_TYPES = [
	{ label: 'H1', style: 'header-one' },
	{ label: 'H2', style: 'header-two' },
	{ label: 'H3', style: 'header-three' },
	{ label: 'H4', style: 'header-four' },
	{ label: 'H5', style: 'header-five' },
	{ label: 'H6', style: 'header-six' },
	{ label: 'Blockquote', style: 'blockquote' },
	{ label: 'UL', style: 'unordered-list-item' },
	{ label: 'OL', style: 'ordered-list-item' },
	{ label: 'Code Block', style: 'code-block' },
];



const BlockStyleControls = (props) => {
	const { editorState } = props;
	const selection = editorState.getSelection();
	const blockType = editorState
		.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
		.getType();

	return (
		<div className="RichEditor-controls">
			{BLOCK_TYPES.map((type) =>
				<StyleButton
					key={type.label}
					active={type.style === blockType}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
				/>
			)}
		</div>
	);
};


var INLINE_STYLES = [
	{ label: 'Bold', style: 'BOLD' },
	{ label: 'Italic', style: 'ITALIC' },
	{ label: 'Underline', style: 'UNDERLINE' },
	{ label: 'Monospace', style: 'CODE' },
	{ label: 'Save', style: 'SAVE' },
];



const InlineStyleControls = (props) => {
	var currentStyle = props.editorState.getCurrentInlineStyle();
	return (
		<div className="RichEditor-controls">
			{INLINE_STYLES.map(type =>
				<StyleButton
					key={type.label}
					active={currentStyle.has(type.style)}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
				/>
			)}
		</div>
	);
};



export default withStyles(styles)(RichEditorExample);
// export default RichEditorExample;