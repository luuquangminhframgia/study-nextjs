# Study NextJS

### Install
```
npm install --save react react-dom next
```
or
```
yarn add react react-dom next --save
```

### Next Link
```
// Import Link
import Link from 'next/link'

// Using Link
<Link href="/">
  <a style={linkStyle}>Home</a>
</Link>

// Using as to make alias link and href to pass data
<Link as='alias-link' href='/post?data=data'>
```

### Share Component
Create components and import to using, example create Header component then import to using on Home and About page

### Router
```
// Import withRouter to router link to page
import { withRouter } from 'next/router'
...
```

### Server Side Support for Clean URLs
Using Express Framework
```
yarn add express --save
```
