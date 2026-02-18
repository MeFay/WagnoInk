import { Box, Typography, Card, CardContent, Avatar, Button } from "@mui/material";

const blogPosts = [
  {
    title: "Quick Start with Magic Portfolio",
    author: "Selene Yu",
    date: "April 23, 2025",
    avatar: "/images/avatars/wagno.jpg",
    link: "#",
  },
  {
    title: "Enable or Disable Pages for Your Portfolio",
    author: "Selene Yu",
    date: "April 22, 2025",
    avatar: "/images/avatars/wagno.jpg",
    link: "#",
  },
];

const BlogSection = () => (
  <Box sx={{ py: 12, px: 2, maxWidth: 1200, mx: "auto" }}>
    <Typography variant="h4" sx={{ mb: 6, textAlign: "center", fontWeight: 700 }}>
      Latest from the Blog
    </Typography>
    <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center" }}>
      {blogPosts.map((post, idx) => (
        <Card key={idx} sx={{ width: 300, cursor: "pointer", ":hover": { boxShadow: 6 } }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Avatar src={post.avatar} sx={{ mr: 1 }} />
              <Typography variant="body2">{post.author}</Typography>
              <Typography variant="caption" sx={{ ml: "auto" }}>{post.date}</Typography>
            </Box>
            <Typography variant="h6">{post.title}</Typography>
            <Button href={post.link} sx={{ mt: 2 }} variant="outlined" fullWidth>
              Read More
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Box>
);

export default BlogSection;
