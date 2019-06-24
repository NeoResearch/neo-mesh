# neo-mesh

This is **NeoMesh**...

## How to use it

### Install on web browser

```html
<script src="https://unpkg.com/neo-mesh/dist/NeoMesh.js"></script>
```

```js
NeoMesh = neomesh.NeoMesh;
x = new csBigInteger(1000);
y = new csFixed8(1000);
```

### Install on npm

`npm install neomesh`

```js
const NeoMesh = require('neomesh').NeoMesh;
NeoMesh.defaultConfig(); // should be ...
```

## For Developers

### Tests

`npm test`

### Build Webpack

`npm run build`

### New minor version

`npm version minor`

### Push and Publish

`git push origin master --tags`

`npm publish`

## License

MIT License

Copyleft 2019
