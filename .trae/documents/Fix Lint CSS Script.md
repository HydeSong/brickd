## Fix Lint CSS Script

### Issue

The `pnpm run lint` command is failing with the error:

```
Error: No files matching the pattern "{src,test}/**/*.{css,less}" were found.
```

### Root Cause

* The `lint:css` script in package.json is trying to lint CSS and Less files in the `src` and `test` directories

* However, there are no CSS or Less files in these directories (only TypeScript files and markdown files)

* The `test` directory doesn't even exist

* Stylelint is configured to fail when no files match the pattern

### Solution

Add the `--allow-empty-input` flag to the stylelint command in the `lint:css` script. This flag tells stylelint to not fail when no files match the pattern.

### Changes Required

1. Modify the `lint:css` script in package.json to include the `--allow-empty-input` flag

### Implementation Steps

1. Open package.json
2. Update the `lint:css` script from:

   ```json
   "lint:css": "stylelint \"{src,test}/**/*.{css,less}\""
   ```

   to:

   ```json
   "lint:css": "stylelint \"{src,test}/**/*.{css,less}\" --allow-empty-input"
   ```
3. Save the file
4. Verify the fix by running `pnpm run lint`

