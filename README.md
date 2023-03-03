This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Revalidating Pages

Data on some of the pages were retrieved from the backend using [Next.js' Static Site Generation (SSG)](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) data fetching technique. In such cases, since SSG happens during the app build, page revalidation is necessary to update the data on the frontend when there is a change on the backend. This way, we don't need to build the app every time data changes on the backend.

To handle revalidation, an API route has been set up, in line with [Next.js' On-Demand Incremental Static Regeneration (ISR)](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) technique, to trigger a page revalidation when needed.

This can be done by making a request to the url, https://scholarly.africa/api/revalidate?secret=[token]&path=[path], where:

* `[token]` is the revalidation token stored as an environment variable, with the alias REVALIDATION_SECRET_TOKEN as at the time of writing this documentation. This is used to prevent unauthorized revalidations.

* `[path]` is the path to the page to revalidate, relative to the domain/base URL.

For instance, if the REVALIDATION_SECRET_TOKEN is hZ5Tgy8MBu9Nw and the page with the stale data (to be revalidated) is the FAQs page, accessible via https://scholarly.africa/faqs, the url to revalidate the page would be https://scholarly.africa/api/revalidate?secret=hZ5Tgy8MBu9Nw&path=/faqs.

> **Note:** Do not omit the leading forward slash (/) in the 'path' parameter. For  the homepage, the path will be just the forward slash (/).

<!-- Below is a list of pages using SSG and the data they fetch, as at the time of writing.

* Homepage ('/') - used to fetch the testimonials and FAQs.
* Students ('/students') and Affiliates ('/affiliates') - used to fetch the testimonials. -->