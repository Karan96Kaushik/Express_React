import React from "react";
import { ResponsiveRadar } from '@nivo/radar'
import { useTheme } from "@material-ui/core";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveRadar = ({ data, keys, index /* see data tab */ }) => {
    const theme = useTheme();

    const LabelComponent = ({ id, anchor }) => (
        <g transform={`translate(${anchor === 'end' ? -30 : anchor === 'middle' ? -40 : 0}, -20)`}>
            <text
                y={24}
                style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    fill: theme.palette.primary.main,
                }}
            >{id}</text>
        </g>
    )

    return (
        <ResponsiveRadar
            data={data}
            gridLabel={LabelComponent}
            keys={keys}
            indexBy={index}
            maxValue="auto"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            curve="linearClosed"
            borderWidth={2}
            borderColor={{ from: 'color' }}
            gridLevels={5}
            gridShape="circular"
            gridLabelOffset={36}
            enableDots={true}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color' }}
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={-12}
            colors={{ scheme: 'paired' }}
            fillOpacity={0.25}
            blendMode="multiply"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    // itemTextColor: "#ffffff",
                    itemTextColor: theme.palette.secondary.main,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: theme.palette.secondary.main
                            }
                        }
                    ]
                }
            ]}
        />
    )
}
export default MyResponsiveRadar;