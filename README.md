# SWAPI Implementation

An implementation of the [Star Wars API](https://swapi.dev/]) using Next.js and React Query. I focused primarily on functionality over design.

## Live Site

[https://swapi-implementation.vercel.app](https://swapi-implementation.vercel.app)

## SSR vs SSG

Since paths are unknown in advance, SSR was chosen. On the first render, a request to the API is made on the server, with following requests being made through the client. The drawback to this method is that the initial page load is slightly slower but means we can leverage the benefits of SSR. Ideally we would periodically statically generate the endpoints in advance.

## React Query

React query is used to manage server state. It also has the feature of easily being able to hydrate client-side state from the server. It has some fairly aggressive caching defaults at the minute which could be dialed down a bit.
