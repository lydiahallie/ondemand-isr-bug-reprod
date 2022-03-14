## Reprod for on-demand ISR issue 

This project reproduces an on-demand ISR issue where the `unstable_revalidate` function is unable to fetch the page to revalidate. 

### Steps to reproduce:

1. Clone the repository
2. Run `yarn build`
3. Run `yarn start`
4. Navigate to `http://localhost:3000/api/revalidate`
