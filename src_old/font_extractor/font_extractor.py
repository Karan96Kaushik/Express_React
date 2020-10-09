from requests import get
from bs4 import BeautifulSoup

all_chars = """1   2   3   4   5   6   7   8   9   0  /   *   -   +   .   [   ]   {   }   ~   !   @   #   $   %   ^   &   (   )   =   _   a   b   c   e   f   g   h   i   j   k   l   m   n   o   p   q   r   s   t   u   v   w   x   y   z   A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z"""

char_array = all_chars.split(   )

print(char_array)

html = get("https://www.stylishtextgenerator.com/?=1").content
soup = BeautifulSoup(html,"html.parser")

fonts = soup.findAll('div', {'class':'stylish-div'})
for font in fonts:
    font_name = font.find('span').text
    font_data = font.find('p').text
    print(font_name, font_data)