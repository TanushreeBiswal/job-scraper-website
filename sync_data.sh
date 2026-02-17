#!/bin/bash

# Source path (scraper project)
SOURCE_FILE="../selenium_scraper/latest_jobs.json"

# Destination path (public folder of react app)
DEST_DIR="public"
DEST_FILE="$DEST_DIR/latest_jobs.json"

# Check if source exists
if [ -f "$SOURCE_FILE" ]; then
    echo "Found latest_jobs.json at $SOURCE_FILE"
    
    # Create public dir if not exists (though it should)
    mkdir -p "$DEST_DIR"
    
    # Copy file
    cp "$SOURCE_FILE" "$DEST_FILE"
    
    if [ $? -eq 0 ]; then
        echo "Successfully synced to $DEST_FILE"
        ls -lh "$DEST_FILE"
    else
        echo "Error: Failed to copy file"
        exit 1
    fi
else
    echo "Error: Source file $SOURCE_FILE not found!"
    echo "Please run the scraper to generate data first."
    exit 1
fi
