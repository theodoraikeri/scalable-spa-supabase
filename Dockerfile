# Use nginx to serve the React app
FROM nginx:alpine

# Copy built files
COPY dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]