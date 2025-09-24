find . -name 'app.js' | xargs grep -l '"arkiv,tryckt"' | xargs sed -i.bak s/"arkiv,tryckt"/"sagenkartan,tryckt"/g
