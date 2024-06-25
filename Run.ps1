# Set the execution policy to RemoteSigned for the current user
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Function to display the menu
function Show-Menu {
    param (
        [string]$Title = 'React Native Project Script'
    )
    
    $menuItems = @(
        "1) Run React Native app on Android",
        "2) Reset Metro cache and run app",
        "3) Build the app",
        "4) Build APK for testing",
        "5) Install the app",
        "6) Install the debug-app",
        "7) Exit"
    )
    
    Write-Host "======== $Title ========" -ForegroundColor Cyan
    $menuItems | ForEach-Object { Write-Host $_ }
}

# Function to run the selected command
function Run-Command {
    param (
        [int]$Choice
    )
    
    switch ($Choice) {
        1 {
            Write-Host "Running React Native app on Android..."
            npx react-native run-android
        }
        2 {
            Write-Host "Resetting Metro cache and running app..."
            npm run start -- --reset-cache
            npx react-native run-android
        }
        3 {
            Write-Host "Building the React Native app..."
            cd "$currentDir\android" &&
            .\gradlew assembleRelease &&
            cd ..
            # Show-OutputLocation "app/build/outputs/apk/release"
        }
        4 {
            Write-Host "Building APK for testing..."
            cd "$currentDir\android" && 
            .\gradlew assembleDebug && 
            cd ..
            # Show-OutputLocation "app/build/outputs/apk/debug"
        }
        5
        {
            Write-Host "Install release app"
            cd "$currentDir\android\app\build\outputs\apk\release\" && adb install .\app-release.apk && cd .. && cd .. && cd .. && cd .. && cd .. && cd ..
        }
        6
        {
            Write-Host "Install debug app"
            cd "$currentDir\android\app\build\outputs\apk\debug\" && adb install .\app-debug.apk && cd .. && cd .. && cd .. && cd .. && cd .. && cd ..
        }
        7 
        {
            Write-Host "Exiting script."
            exit
        }
        default {
            Write-Host "Invalid choice. Please select a valid option."
        }
    }
}

# Function to show the output location
function Show-OutputLocation {
    param (
        [string]$Location
    )

    $fullPath = "$currentDir\$Location"
    Write-Host "Output location: $fullPath"
    Invoke-Item $fullPath
}

# Get the current directory
$currentDir = Get-Location

# Ensure the current directory is correct
if (-Not (Test-Path "$currentDir\package.json")) {
    Write-Error "Not in a valid React Native project directory. Please run this script from the root of your React Native project."
    exit 1
}

# Main loop to display the menu and get user input
while ($true) {
    Show-Menu
    $choice = Read-Host "Please select an option (1-5)"
    if ($choice -match '^[1-5]$') {
        Run-Command -Choice $choice
    } else {
        Write-Host "Invalid input. Please enter a number between 1 and 5."
    }
}
