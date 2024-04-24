## How to setup a new Typescript Express project

1. 
```
npm init -y
```

2.
```
npm install -D typescript
```

3. 
```
tsc --init
```

4.
```
Add the following scripts in package.json 

{
    "build": "npx tsc",
    "watch": "npx tsc -w",
    "prestart": "npm run build",
    "start": "npx nodemon dist/index.js",
    "dev": "npx concurrently --kill-others \"npm run watch\" \"npm start\""
}
```

5.
```
npm run dev
```