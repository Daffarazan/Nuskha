@echo off
cd /d "%~dp0"
echo Connect your phone to the same Wi-Fi as this laptop.
echo Open http://YOUR-WIFI-IP:8001 on your phone.
echo Find the Wi-Fi IPv4 Address below:
ipconfig
echo.
echo Keep this window open while using Nuskha. Press Ctrl+C to stop.
echo If Windows Firewall asks, allow access only on a trusted private network.
echo This shares the app files with your network. Offline installation needs HTTPS.
python -m http.server 8001 --bind 0.0.0.0 --directory nuskha-offline
pause
