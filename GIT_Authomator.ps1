# View available origins
Write-Host "Available origins:"
$origins = git remote -v 
for ($i = 0; $i -lt $origins.Length; $i++) {
    Write-Host "$($i + 1). $($origins[$i])"
}

$selectedOriginNumber = Read-Host "Enter the number corresponding to the origin you want to use"

if ($selectedOriginNumber -ge 1 -and $selectedOriginNumber -le $origins.Length) {

    $selectedOrigin = ($origins[$selectedOriginNumber - 1] -split '\s+')[1].Trim()

    git remote set-url origin $selectedOrigin

    $timestamp = Get-Date -Format "hh:mmtt - dd/MM/yyyy"

    git add .

    git commit -m "$timestamp"

    $branches = git branch -a | ForEach-Object { ($_ -replace 'remotes/origin/', '') -replace '\*|\s', '' }

    Write-Host "Available branches:"
    for ($i = 0; $i -lt $branches.Length; $i++) {
        Write-Host "$($i + 1). $($branches[$i])"
    }

    $selectedBranchNumber = Read-Host "Enter the number corresponding to the branch you want to push"

    if ($selectedBranchNumber -ge 1 -and $selectedBranchNumber -le $branches.Length) {
        
        $selectedBranch = $branches[$selectedBranchNumber - 1].Trim()
        Write-Host "Selected branch: $selectedBranch"
        
        git push origin $selectedBranch
    } else {
        Write-Host "Invalid input. Please enter a number corresponding to the branch."
    }
} else {
    Write-Host "Invalid input. Please enter a number corresponding to the origin."
}


