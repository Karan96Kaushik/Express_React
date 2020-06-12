import sys
from bs4 import BeautifulSoup
import json
from requests import get

data = sys.argv[1]

html = BeautifulSoup(data, "html.parser")
# print(html)
title = html.find("title").text.strip().split("Watch ")[1].split("at gogoanime")[0]
frame = html.find_all("iframe")[0].attrs["src"]

# print("Got Frame", frame)
if frame.find("https") == -1:
    frame = "https:" + frame

# print(json.dumps([frame]))
r = get(frame).content.decode()

# print("Finding video link...")

vid_src_start = r.find("sources:[{file: '") + 17
vid_src_end = r.find("',label: 'HD P','type' : 'mp4'}]")

vid_src = r[vid_src_start: vid_src_end]

print(json.dumps({
    "name": title.strip(),
    "link": vid_src
    }))