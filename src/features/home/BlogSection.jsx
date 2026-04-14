import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";
import SectionContainer from "../../components/SectionContainer";
import Card from "../../components/UI/Card";
import CustomButton from "../../components/UI/Button";
import { typeScale } from "../../styles/theme";
import { blogPosts as allPosts } from "../blog/Blog.data";

const MotionBox = motion(Box);

const BlogSection = () => {
  const { t } = useTranslation();

  // Build translated posts inside the component so t() is active
  const blogPosts = allPosts.slice(0, 3).map((p) => ({
    ...p,
    title:    t(`blogPosts.${p.slug}.title`,    { defaultValue: p.title }),
    excerpt:  t(`blogPosts.${p.slug}.excerpt`,  { defaultValue: p.excerpt }),
    category: t(`blogPosts.${p.slug}.category`, { defaultValue: p.category }),
    date:     t(`blogPosts.${p.slug}.date`,     { defaultValue: p.date }),
    readTime: t(`blogPosts.${p.slug}.readTime`, { defaultValue: p.readTime }),
    image: p.coverImage,
    link: `/blog/${p.slug}`,
  }));
  return (
  <SectionContainer id="section-blog">
    {/* Header */}
    <MotionBox
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }} viewport={{ once: true }}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 2 }}
    >
      <Typography sx={{ fontSize: typeScale.label, fontWeight: 600, letterSpacing: 4, color: "accent.main", textTransform: "uppercase" }}>
        {t("blogSection.label")}
      </Typography>
      <Typography variant="h2" sx={{ fontWeight: 900, maxWidth: 700 }}>
        {t("blogSection.title")}
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: typeScale.body, lineHeight: 1.7, maxWidth: 560 }}>
        {t("blogSection.description")}
      </Typography>
    </MotionBox>

    {/* Grid */}
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, gap: { xs: 3, md: 4 } }}>
      {blogPosts.map((post, index) => (
        <Card key={post.link} {...post} index={index} />
      ))}
    </Box>

    {/* View All */}
    <MotionBox
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <CustomButton variant="secondary" size="medium" href="/blog">
        {t("blogSection.viewAll")}
        <ArrowForwardIcon sx={{ fontSize: 16 }} />
      </CustomButton>
    </MotionBox>
  </SectionContainer>
  );
};

export default BlogSection;
