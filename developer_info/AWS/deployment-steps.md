
#   Deployment Steps

source = https://www.youtube.com/watch?v=mls8tiiI3uc

S3 Setup

1. Create two buckets - www.amlanalok.com and amlanalok.com
2. Make www.amlanalok.com bucket public
3. Add all contents of the build folder from your react app here
4. Enable static hosting for www.amlanalok.com bucket and make default page index.html. Choose http, for now.
5. Enable static hosting for amlanalok.com bucket and choose redict to www.amlanalok.com bucket

Route 53 Setup

6. You must have a DNS before hand
7. Add amlanalok.com and www.amlanalok.com as records with redirection to the S3 www.amlanalok.com bucket

Now, www.amlanalok.com should start working