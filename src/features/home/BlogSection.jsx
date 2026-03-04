import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
} from "@mui/material";

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
  <Box sx={{ py: 12, px: 2 }}>
    <Typography
      variant="h4"
      sx={{ p: 4, textAlign: "center", fontWeight: 700 }}
    >
      Latest from the Blog
    </Typography>

    <Box
      sx={{
        display: "flex",
        gap: 4,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {blogPosts.map((post, idx) => (
        <Card
          key={idx}
          sx={{
            width: 300,
            cursor: "pointer",
            ":hover": { boxShadow: 6 },
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar src={post.avatar} />
                <Typography variant="body2" sx={{ px: 1 }}>
                  {post.author}
                </Typography>
              </Box>

              <Typography variant="caption">{post.date}</Typography>
            </Box>

            {/* Title */}
            <Box sx={{ p: 1 }}>
              <Typography variant="h6">{post.title}</Typography>
            </Box>

            {/* Button */}
            <Box sx={{ p: 1 }}>
              <Button href={post.link} variant="outlined" fullWidth>
                Read More
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Box>
);

export default BlogSection;
