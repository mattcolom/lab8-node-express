# CS 351 - Lab 8.1 and 8.2

Node.js + Express demo by Matt Coloma. This project includes a static frontend and two REST API routes called via client-side JavaScript `fetch()`.

## Run locally

```bash
npm install
npm start
```

Open **http://localhost:8080** and click the GET button and submit a name using the POST form. To stop the server, press **Ctrl+C** in the terminal.

## Git and GitHub

Create an empty repository in GitHub. In this folder run:

```bash
git init
git add .
git commit -m "CS351 Lab 8"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lab8-node-express.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username. To show Git is set up, run `git status` and open the GitHub repo page.

## Deploy to Google Cloud Run

In Google Cloud Shell, clone your repository and deploy from source:

```bash
git clone https://github.com/YOUR_USERNAME/lab8-node-express.git
cd lab8-node-express
gcloud run deploy lab8-node-express --source . --region us-west1 --allow-unauthenticated
```

Select the correct Google Cloud project, enable APIs, configure billing if prompted, and make sure you have required permissions. Once deployment completes, open the Service URL and test GET and POST buttons.

## Cloud Run stop demo

Local `Ctrl+C` stops the Node process. Cloud Run is managed/serverless: it scales down when idle rather than having a local terminal process to stop. To demonstrate disabling traffic, use Cloud Run > your service > Security and restrict unauthenticated access, or delete the service if appropriate (deletion removes its public endpoint). Do not delete it before grading.

## Demo checklist

- [ ] Show local site on http://localhost:8080
- [ ] GET button returns a message from the backend
- [ ] POST form sends name and returns greeting
- [ ] Show Ctrl+C stops local server, then npm start restarts it
- [ ] Show files committed to GitHub
- [ ] Show live Cloud Run Service URL running GET and POST
- [ ] Explain manual source deployment from GitHub clone + `gcloud run deploy --source .`

## API routes

- `GET /api/message`: returns a JSON message
- `POST /api/greet`: expects JSON `{ "name": "Matt" }`, returns a JSON greeting
