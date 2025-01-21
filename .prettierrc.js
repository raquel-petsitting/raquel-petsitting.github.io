module.exports = {
  printWidth: 80, // Set maximum line width
  tabWidth: 2, // Use 2 spaces for indentation
  useTabs: false, // Use spaces instead of tabs
  semi: true, // End statements with a semicolon
  singleQuote: true, // Use single quotes in JavaScript
  trailingComma: 'all', // Use trailing commas where valid in ES5 (objects, arrays, etc.)
  bracketSpacing: true, // Add spaces inside object braces
  arrowParens: 'always', // Always include parentheses around arrow function parameters

  overrides: [
    {
      files: '*.html',
      options: {
        singleQuote: false, // Use double quotes in HTML
        tabWidth: 4, // Optional: Use 4 spaces for indentation in HTML
      },
    },
    {
      files: '*.json',
      options: {
        tabWidth: 2, // JSON typically uses 2 spaces for indentation
      },
    },
    {
      files: '*.css',
      options: {
        singleQuote: false, // Use double quotes in CSS for consistency
      },
    },
    {
      files: '*.jsx',
      options: {
        printWidth: 80,          // Limit lines to 80 characters
        tabWidth: 2,             // Use 2 spaces for indentation
        useTabs: false,          // Use spaces instead of tabs
        semi: true,              // End statements with a semicolon
        singleQuote: true,       // Use single quotes, except for JSX attributes
        trailingComma: 'es5',    // Add trailing commas where valid in ES5 (objects, arrays, etc.)
        bracketSpacing: true,    // Add spaces inside object braces
        arrowParens: 'always',   // Always include parentheses around arrow function parameters
        endOfLine: 'lf'          // Use line-feed (\n) for newlines
      }
    }
  ],

  // Additional custom rules
  endOfLine: 'lf', // Ensure a line break at the end of each file
  embeddedLanguageFormatting: 'auto', // Format embedded code (e.g., in HTML <script> tags)
};
