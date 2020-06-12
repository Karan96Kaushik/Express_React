import sys
from bs4 import BeautifulSoup
import json

data = sys.argv[1]

html = BeautifulSoup(data, "html.parser")

ep_list = html.find("ul", id="episode_related")
eps = ep_list.find_all("li")
anime_name = html.find("div", class_="anime_info_body").find("h1").text.strip()

# print(anime_name)
eps_array = []
# global eps_array

for ep in eps:
    link = "https://gogoanimetv.io" + ep.find("a").attrs["href"].strip()
    name = " ".join(ep.text.split())

    eps_array.append({
        "value":link,
        "label":name,
        "anime": anime_name,
        # "anime_url": url
        })

# return eps_array

print(json.dumps(eps_array))