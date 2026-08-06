const fs = require('fs');
const path = require('path');

// Create a re-export of useEffectEvent from react module
const reactPath = path.join(__dirname, '../node_modules/react');
const reactPkg = require(path.join(reactPath, 'package.json'));
const reactIndex = path.join(reactPath, reactPkg.main || 'index.js');

// Read the react index.js file
let reactContent = fs.readFileSync(reactIndex, 'utf8');

// If it doesn't already have useEffectEvent, add it
if (!reactContent.includes('useEffectEvent')) {
  // Append the import and export of useEffectEvent from use-effect-event
  const addition = `\n// Polyfill for useEffectEvent (from use-effect-event package)\nif (typeof exports !== 'undefined') {\n  try {\n    const { useEffectEvent } = require('use-effect-event');\n    exports.useEffectEvent = useEffectEvent;\n  } catch (e) {\n    // Silent fail if use-effect-event is not available\n  }\n}`;
  
  fs.appendFileSync(reactIndex, addition);
  console.log('✓ Patched React to export useEffectEvent');
}
