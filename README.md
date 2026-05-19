# CounterParty Brand Guidelines

Next.js brand guidelines site with a full-viewport landing video and fixed logo.

## Requirements

- Node.js 20.9+ (see `.nvmrc`)

## Development

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Assets

Brand media lives in `public/brand/`. To re-transcode the hero video from the source `.mov`:

```bash
./scripts/transcode-movie.sh "/path/to/movie.mov"
```

Large binaries may warrant Git LFS or external hosting as the site grows.
