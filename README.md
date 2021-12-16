This is a [Next.js](https://nextjs.org/) project created to show the issue mentioned on github [issue][1].

#### steps to reproduce

- start the server

```
nmp i
npm run dev
```

- open chrome browser with http://localhost:3000/ 
- observe the page refresh for a fraction of second.
- One can use chrome developer tools to load the filmstrip with `ctrl + r`

Optionally, you can also create a build and run the server using following commands

```
npm run build
npm run start
```

[1]: https://github.com/vercel/next.js/issues/30535