# YouTube_AdSkip
13行で作るYoutubeの広告スキップChrome拡張機能！！

## About
YouTubeの広告がスキップできる状態になったら自動でスキップしてくれます。
広告をブロックしてるわけではないですが、5秒待つ必要がなくなったのでだいたい同じような結果が得られます。

バックグラウンドでYouTubeをずっと流しておきたいときに、長い広告が入っても自動でスキップボタンが押されるので作業が中断されることがありません。

ChromeウェブストアでYouTubeの広告ブロック・スキップを検索すると日本語が怪しいものとかが多くてしかもソースも(僕には)よくわからないし長かったのでChrome拡張機能の勉強を兼ねて作ってみたら、思ったより簡単にできてびっくり


## How to use
```
mkdir YouTube_AdSkip
git clone https://github.com/Ekke-kuru2/YouTube_AdSkip.git
```
Chrome上で
chrome://extensions/
を開き
「パッケージ化されていない拡張機能を読み込む」からダウンロードしたフォルダを選択

## How it works
www.youtube.com にマッチするページが読み込まれるとsetIntervalがスタートします

1秒ごとにDOM上で広告のスキップボタンがあるかを確かめ、ある時はそれをクリックします。

単純明快だね！！！


