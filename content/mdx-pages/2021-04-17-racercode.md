---
date: 2021-04-17
title: "get Racer Code"
tags: ["Jupyter"]
---

## 選手情報の取得

### 1. Racer Code

iii

```python
from bs4 import BeautifulSoup
import re
import pickle
from IPython.display import HTML
import os
```

jjj

```python
url = "https://autorace.jp/netstadium/Ranking/Rank/All"
html = urllib.request.urlopen(url)
soup = BeautifulSoup(html)
print(soup.find("title").text)
# -> ランキングTOP｜ネットスタジアム｜オートレースオフィシャル
```

hhh

```python
rank = "S"
lst = soup.find_all("a", href=re.compile("/netstadium/Profile/"))
dic = {}
for n, e in enumerate(lst):
    no = re.sub("\D", "", str(e))
    name = re.sub("\t|\n| |\u3000", "", e.text)
    s = rank + "-" + str(n + 1) + "_" + name
    dic[s] = no
print(dic)
# -> {'S-1_青山周平': '3101', 'S-2_鈴木圭一郎': '3206', ..
```

kkk

```python
racerCode_d = {}
racerCode_d.update(dic)
print(racerCode_d)
# -> {'S-1_青山周平': '3101', 'S-2_鈴木圭一郎': '3206', ..
```

kk

```python
url = "https://autorace.jp/netstadium/Ranking/Rank/All/A"
...
rank = "A"
...
# racerCode_d = {}
racerCode_d.update(dic)
print(racerCode_d)
# -> {'S-1_青山周平': '3101', 'S-2_鈴木圭一郎': '3206', ..
# -> .. 'S-48_池田政和': '2305', 'A-1_岩崎亮一': '2505', .. 
```

B-34 が欠番のため

```python
# B-34 が欠番
rank = "B"
lst = soup.find_all("a", href=re.compile("/netstadium/Profile/"))
dic = {}
for n, e in enumerate(lst):
#  	 if n < 33:
    if n > 32:
        no = re.sub("\D", "", str(e))
        name = re.sub("\t|\n| |\u3000", "", e.text)
#        s = rank + "-" + str(n + 1) + "_" + name
        s = rank + "-" + str(n + 2) + "_" + name
        dic[s] = no
```

kjl

```python
with open('racerCode_d.pickle', 'wb') as f:
    pickle.dump(racerCode_d, f)
```

klkj

```python
with open('racerCode_d.pickle', 'rb') as f:
    racerCode_d = pickle.load(f)
print(len(racerCode_d))
# -> 388
```

lkl

```python
racer = "A-1_岩崎亮一"
url = "https://autorace.jp/netstadium/Profile/"
link_url = "<a href='" + url + racerCode_d[racer] + "'>"
link_tag = link_url + racer + "</a>"
print(link_tag)
# -> <a href='https://autorace.jp/netstadium/Profile/2505'>A-1_岩崎亮一</a>
HTML(link_tag)
# -> A-1_岩崎亮一
```

lll

```python
IMAGE_DIR = 'images'
url = "https://autorace.jp/netstadium/Profile/"
res = input("この処理は画像ファイルをダウンロードします。続けますか? Yes or No: ")
if res == "Yes" or res == "yes":
    print("処理を開始します。")
    if not os.path.exists(IMAGE_DIR):
        os.makedirs(IMAGE_DIR)
    with open('racerCode_d.pickle', 'rb') as f:
        racerCode_d = pickle.load(f)
    for name in racerCode_d:
        profile_url = url + racerCode_d[name]
        html = urllib.request.urlopen(profile_url)
        soup = BeautifulSoup(html)
        img_url = soup.find_all("img")[2].get("src")
        req = requests.get("https://autorace.jp" + img_url)
        with open("./" + IMAGE_DIR + "/" + name + ".jpg", 'wb') as f:
            f.write(req.content)
    print("処理が終了しました。")
else:
    print("処理を中止しました。")
```

