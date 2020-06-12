import sys
from bs4 import BeautifulSoup
import json

data = sys.argv[1]

r = (data)

# print("Finding video link...")

vid_src_start = r.find("sources:[{file: '") + 17
vid_src_end = r.find("',label: 'HD P','type' : 'mp4'}]")

vid_src = r[vid_src_start: vid_src_end]

print(json.dumps([vid_src]))