# CS 351 — Lab 8.1 and 8.2

Start locally: `npm install` then `npm start`. Visit http://localhost:8080. Stop with Ctrl+C.

Lab 8.2 Part A: traditional `POST /readCustomerInfoAndRespond`, HTML response that navigates to a new page.

Lab 8.2 Part B: `fetch()` sends JSON to `POST /api/customer`, which returns JSON and updates the page without navigation.

Cloud Run source deploy: `gcloud run deploy lab8-node-express --source . --region us-west1 --allow-unauthenticated`.

Push changed files to GitHub before deploying from Cloud Shell.
