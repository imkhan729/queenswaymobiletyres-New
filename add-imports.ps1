
$srcPath = "c:\Users\Roy\Downloads\Queensway-Revamp\client\src"
$importLine = "import { handlePhoneClick } from `"@/lib/usePhoneClick`";"

$files = Get-ChildItem -Path $srcPath -Recurse -Include '*.tsx', '*.ts' | Select-Object -ExpandProperty FullName

$totalUpdated = 0

foreach ($file in $files) {
    # Skip the utility file itself
    if ($file -like "*usePhoneClick*") { continue }

    $content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

    # Only process files that use handlePhoneClick but don't yet import it
    if ($content.Contains("handlePhoneClick") -and -not $content.Contains("usePhoneClick")) {
        # Find the first import line and insert our import after it
        $lines = $content -split "`n"
        $insertIndex = -1
        for ($i = 0; $i -lt $lines.Length; $i++) {
            if ($lines[$i] -match "^import ") {
                $insertIndex = $i
            }
        }
        if ($insertIndex -ge 0) {
            # Insert after the last import block
            $newLines = @()
            for ($i = 0; $i -le $insertIndex; $i++) {
                $newLines += $lines[$i]
            }
            $newLines += $importLine
            for ($i = $insertIndex + 1; $i -lt $lines.Length; $i++) {
                $newLines += $lines[$i]
            }
            $newContent = $newLines -join "`n"
            [System.IO.File]::WriteAllText($file, $newContent, [System.Text.Encoding]::UTF8)
            Write-Host "Added import to: $file"
            $totalUpdated++
        }
    }
}

Write-Host ""
Write-Host "Total files updated: $totalUpdated"
