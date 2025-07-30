#!/bin/bash

echo "🏋️ Starting Sky Fitness Website..."
echo ""

# Check if we're on macOS, Linux, or WSL
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    echo "Opening website on macOS..."
    open index.html
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    echo "Opening website on Linux..."
    if command -v xdg-open > /dev/null; then
        xdg-open index.html
    elif command -v gnome-open > /dev/null; then
        gnome-open index.html
    else
        echo "Please open 'index.html' in your web browser manually."
    fi
else
    echo "Please open 'index.html' in your web browser."
fi

echo ""
echo "✅ Website launched successfully!"
echo "🌐 If it doesn't open automatically, please open 'index.html' in your web browser."
echo ""