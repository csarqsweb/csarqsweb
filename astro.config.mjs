import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.csarquitectas.com.ar', // Write here your website url
	server: {
		host: true, // Esto permite que el servidor escuche en la red local
	},
});
