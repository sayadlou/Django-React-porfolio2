cd .\frontend
cd .\src
cd .\apis
Rename-Item .\axios.js .\axios-z.js
Rename-Item .\axios-temp.js .\axios.js
cd ..
cd ..
npm run build
cd .\src\apis
Rename-Item  .\axios.js .\axios-temp.js
Rename-Item  .\axios-z.js .\axios.js
cd ..
cd ..
cd ..
.\venv\Scripts\activate
echo "yes" | py .\manage.py collectstatic

Move-Item .\frontend\node_modules\ .\frontend-backup\
Move-Item .\frontend\public\ .\frontend-backup\
Move-Item .\frontend\src\ .\frontend-backup\
Move-Item .\frontend\package.json .\frontend-backup\
Move-Item .\frontend\package-lock.json .\frontend-backup\

$file_name = "D:\Comidt\full_stack\backup\comidt-full_stack-$(get-date -f yyyy-MM-dd__HH-mm).zip"
$compress = @{
LiteralPath= "D:\Comidt\full_stack\comidt","D:\Comidt\full_stack\config","D:\Comidt\full_stack\frontend","D:\Comidt\full_stack\media","D:\Comidt\full_stack\static","D:\Comidt\full_stack\templates","D:\Comidt\full_stack\db.sqlite3","D:\Comidt\full_stack\manage.py"
CompressionLevel = "Optimal"
DestinationPath = $file_name
}
Compress-Archive @compress

Move-Item .\frontend-backup\node_modules\ .\frontend\
Move-Item .\frontend-backup\public\ .\frontend\
Move-Item .\frontend-backup\src\ .\frontend\
Move-Item .\frontend-backup\package.json .\frontend\
Move-Item .\frontend-backup\package-lock.json .\frontend\

Copy-Item $file_name F:\Project-Backup
$Age = Read-Host "finished and copied can i go"
