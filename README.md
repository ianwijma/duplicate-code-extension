# duplicate-code-extension
Collect code from inline scripts and fetched scripts, where after it compares the AST of the code to detect duplicate code patterns.


## The idea

This idea is that this extension collects JS code from various places, parses it to a AST, ignores variable/function names, and checks for duplicate patterns. 

Doing this we can detect duplicate code without worrying about missing anything because of compiled names. Which are sometimes simplified to save those precious bytes.

### Collecting code

We're planning to collect code at various points, where before parsing and comparing you're able to select which points you want to include.

These points are as follows:
- Inline scripts from the initial HTML file
- Inline scripts from the current document
- Fetches scripts from the network (or cache)

### Parsing the code to an AST

> This is a good article around getting AST's, where we might want to look into alternatives: https://www.digitalocean.com/community/tutorials/js-traversing-ast

Currently we're using the (acorn)[https://github.com/acornjs/acorn] library to create our AST, but we might want to investigate alternatives in the future.

### Comparing the AST

> This might have been done before, so we might be able to use it: https://github.com/kucherenko/jscpd

So we want to compare the AST, we want to do this while ignoring variable and function names. As these are sometimes scrambled or even when code is duplicated across (a) codebase(s).

Once we have the AST compared, we want to show a list of potentially duplicated code, with links to their locations with ideally a preview of the locations code.

### Speed & future ideas

Speed is one concern I have around this extension, so the idea I have is that this extension is great for quick investigations. 
But if you want to automate it, so the parsing and comparison logic should export some snapshot of the comparison. 
This comparison snapshot is generated during a build step, where after you can expose the comparison snapshot in some UI which loads the comparison snapshot, and renders a UI.

This UI can be written once, and reused in the extension or the UI. Where in the extension it gets the snapshot passed to the UI. This UI can also download a remote comparison snapshot.

This UI could also be hosted on a service, where a query string parameter can preload a comparison snapshot URL.

Ideas....

## DevLogs



## Local Devloop

Build the extension:

```bash
npm run dev
```

Add the extenion to your chrome browser of choice.

Made a change? Build the extension again, reload extension, test out change.

## Test page Devloop


## Projects used

Chrome Extension: https://developer.chrome.com/docs/extensions/reference
NextJS: https://nextjs.org/
NextUI: https://nextui.org/
FontAwesome: https://fontawesome.com/
Formik: https://formik.org/
Yup: https://github.com/jquense/yup
Acorn: https://github.com/acornjs/acorn