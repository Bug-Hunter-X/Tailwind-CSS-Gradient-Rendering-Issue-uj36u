```javascript
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg">
  <p>This is some text.</p>
</div>
```
To solve this, ensure sufficient contrast between `from` and `to` colors.  Consider using colors further apart on the color spectrum. Alternatively, if you need a subtle gradient, ensure proper color selection to avoid unexpected rendering issues.  You might also review other CSS properties that might interfere with the gradient, such as `background-image` or `background-size` if applied in conjunction with the gradient.