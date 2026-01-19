#!/bin/bash
echo "Enter Commit Message:"
read cm
git add .
git commit -m "$cm"
git push origin main
