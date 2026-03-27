import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatIcon from "@mui/icons-material/Chat";
import PaletteIcon from "@mui/icons-material/Palette";
import PaymentsIcon from "@mui/icons-material/Payments";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HealingIcon from "@mui/icons-material/Healing";
import ContactSection from "../home/ContactForm";

const MotionBox = motion(Box);

const AMBER = "#c8923a";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true },
});

// ── Data ────────────────────────────────────────────────────────────────

const LOCATIONS = [
  {
    city: "Porto",
    country: "Portugal",
    address: "Rua de Santa Catarina, Porto", // TODO: confirm address
    mapsUrl: "https://maps.google.com/?q=Porto,Portugal",
    hours: "Mon–Fri 10:00–19:00 · Sat 11:00–18:00",
    main: true,
  },
  {
    city: "Lisbon",
    country: "Portugal",
    address: "Guest dates — contact to confirm availability", // TODO: confirm address
    mapsUrl: "https://maps.google.com/?q=Lisbon,Portugal",
    hours: "Rotating dates — check Instagram",
    main: false,
  },
  {
    city: "Spain",
    country: "TBD", // TODO: confirm city
    address: "City TBD — contact to confirm",
    mapsUrl: "#",
    hours: "Guest spots — dates announced on Instagram",
    main: false,
    comingSoon: true,
  },
];

const STEPS = [
  {
    number: "01",
    icon: ChatIcon,
    title: "Reach Out",
    body: "Send a message via WhatsApp or the contact form. Describe your idea, the placement, and your rough size in mind. Photos and references are always welcome.",
  },
  {
    number: "02",
    icon: PaletteIcon,
    title: "Consultation",
    body: "We talk through your concept — style, references, placement, and what works best for your body. No commitment at this stage, just a conversation.",
  },
  {
    number: "03",
    icon: PaymentsIcon,
    title: "Design & Deposit",
    body: "A custom design is drawn specifically for you. A non-refundable deposit is required to secure your appointment and cover design time. This is deducted from the final price.",
  },
  {
    number: "04",
    icon: EventAvailableIcon,
    title: "Your Session",
    body: "Sessions are by appointment only. Come prepared (see below), arrive on time, and bring a snack. Depending on the piece, multiple sessions may be needed.",
  },
  {
    number: "05",
    icon: HealingIcon,
    title: "Aftercare",
    body: "Proper aftercare is your responsibility and directly affects the final result. Full instructions are given at the end of your session.",
  },
];

const PAYMENT_CARDS = [
  {
    step: "01",
    title: "Price Discussion",
    body: "During the consultation we talk through your piece and agree on a price. Pricing is per project — not per hour — and depends on size, detail, style, and placement. No surprises.",
  },
  {
    step: "02",
    title: "Upfront Deposit",
    body: "Once the price is agreed, a non-refundable deposit is required to confirm the booking. This covers design time and secures your spot. The deposit is deducted from the final total.",
  },
  {
    step: "03",
    title: "Final Payment",
    body: "The remaining balance is paid on the day, once the tattoo is finished. Cash or bank transfer accepted.",
  },
];

const BEFORE = [
  "Eat a full meal before your appointment",
  "Stay well hydrated the day before and day of",
  "Wear clothing that gives easy access to the area",
  "Avoid alcohol for at least 24 hours beforehand",
  "Get a good night's sleep",
  "Shave the area if needed (or ask us to)",
];

const AFTER = [
  "Keep the tattoo clean — wash gently with mild soap",
  "Apply a thin layer of fragrance-free moisturiser",
  "Avoid sun exposure and soaking for 2–3 weeks",
  "Do not scratch, pick, or rub the healing area",
  "No swimming pools, sea, or saunas during healing",
  "Contact Wagno if anything looks unusual",
];

// ── Sub-components ────────────────────────────────────────────────────

const SectionLabel = ({ children }) => (
  <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: AMBER, textTransform: "uppercase", mb: 1.5 }}>
    {children}
  </Typography>
);

const Card = ({ children, sx = {} }) => (
  <Box sx={{
    p: { xs: 3, md: 4 },
    borderRadius: 3,
    background: "rgba(26,26,26,0.6)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.06)",
    ...sx,
  }}>
    {children}
  </Box>
);

// ── Header decoration — floating rings ────────────────────────────────

const HeaderDecoration = () => (
  <Box sx={{ position: "relative", width: "100%", height: { md: 340, lg: 380 }, display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: "center" }}>
    {/* Outer slow-rotating ring */}
    <MotionBox
      animate={{ rotate: 360 }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      sx={{
        position: "absolute",
        width: 300,
        height: 300,
        borderRadius: "50%",
        border: `1px solid rgba(200, 146, 58, 0.18)`,
      }}
    />

    {/* Middle counter-rotating ring */}
    <MotionBox
      animate={{ rotate: -360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      sx={{
        position: "absolute",
        width: 210,
        height: 210,
        borderRadius: "50%",
        border: `1px solid rgba(198, 40, 40, 0.22)`,
      }}
    />

    {/* Inner pulsing ring */}
    <MotionBox
      animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      sx={{
        position: "absolute",
        width: 130,
        height: 130,
        borderRadius: "50%",
        border: `1px solid rgba(200, 146, 58, 0.35)`,
      }}
    />

    {/* Orbiting amber dot on outer ring */}
    <MotionBox
      animate={{ rotate: 360 }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      sx={{ position: "absolute", width: 300, height: 300, borderRadius: "50%" }}
    >
      <Box sx={{
        position: "absolute",
        top: -5,
        left: "50%",
        transform: "translateX(-50%)",
        width: 10,
        height: 10,
        borderRadius: "50%",
        bgcolor: AMBER,
        boxShadow: `0 0 12px ${AMBER}`,
      }} />
    </MotionBox>

    {/* Orbiting red dot on middle ring */}
    <MotionBox
      animate={{ rotate: -360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      sx={{ position: "absolute", width: 210, height: 210, borderRadius: "50%" }}
    >
      <Box sx={{
        position: "absolute",
        bottom: -5,
        left: "50%",
        transform: "translateX(-50%)",
        width: 8,
        height: 8,
        borderRadius: "50%",
        bgcolor: "#c62828",
        boxShadow: "0 0 10px rgba(198,40,40,0.8)",
      }} />
    </MotionBox>

    {/* Center glow */}
    <MotionBox
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      sx={{
        position: "absolute",
        width: 80,
        height: 80,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${alpha(AMBER, 0.19)} 0%, transparent 70%)`,
      }}
    />

    {/* Center dot */}
    <Box sx={{
      position: "absolute",
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${AMBER} 0%, rgba(200,146,58,0.4) 100%)`,
      boxShadow: `0 0 20px ${alpha(AMBER, 0.38)}`,
    }} />

    {/* Floating label */}
    <MotionBox
      animate={{ y: [-4, 4, -4] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      sx={{
        position: "absolute",
        bottom: 40,
        px: 2.5,
        py: 1,
        borderRadius: 2,
        background: "rgba(26,26,26,0.7)",
        backdropFilter: "blur(8px)",
        border: `1px solid ${alpha(AMBER, 0.19)}`,
      }}
    >
      <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: AMBER, textTransform: "uppercase" }}>
        Porto · Lisbon · Spain
      </Typography>
    </MotionBox>
  </Box>
);

// ── Page ─────────────────────────────────────────────────────────────

const Info = () => {
  const px = { xs: 3, sm: 5, md: 8, lg: 10 };
  const sectionGap = { xs: 7, md: 9 };

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: "88px", md: "96px" } }}>

      {/* ── Header ──────────────────────────────────────────────────── */}
      <Box sx={{ px, py: { xs: 8, md: 10 }, maxWidth: 1400, mx: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: { md: 6 } }}>
          <MotionBox {...fade()} sx={{ flex: 1 }}>
            <SectionLabel>The Details</SectionLabel>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: 900, lineHeight: 1.05, mb: 2 }}>
              Everything You<br />Need to Know
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: { xs: "0.95rem", md: "1.05rem" }, lineHeight: 1.7, maxWidth: 520 }}>
              Locations, booking process, payment, and what to expect — all in one place.
            </Typography>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            sx={{ flex: 1, display: { xs: "none", md: "block" } }}
          >
            <HeaderDecoration />
          </MotionBox>
        </Box>
      </Box>

      {/* ── Locations ───────────────────────────────────────────────── */}
      <Box sx={{ px, pb: sectionGap, maxWidth: 1400, mx: "auto" }}>
        <MotionBox {...fade()}>
          <SectionLabel>Locations</SectionLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: 900, mb: { xs: 5, md: 6 } }}>
            Where You Can Find Me
          </Typography>
        </MotionBox>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
          {LOCATIONS.map((loc, i) => (
            <MotionBox key={loc.city} {...fade(i * 0.1)}>
              <Card sx={{ height: "100%", position: "relative", ...(loc.main && { border: "1px solid rgba(198,40,40,0.25)" }) }}>
                {loc.main && (
                  <Box sx={{ position: "absolute", top: 16, right: 16, px: 1.5, py: 0.4, borderRadius: 999, bgcolor: "rgba(198,40,40,0.15)", border: "1px solid rgba(198,40,40,0.3)" }}>
                    <Typography sx={{ fontSize: 10, fontWeight: 700, color: "primary.main", letterSpacing: 1.5, textTransform: "uppercase" }}>Main Studio</Typography>
                  </Box>
                )}
                {loc.comingSoon && (
                  <Box sx={{ position: "absolute", top: 16, right: 16, px: 1.5, py: 0.4, borderRadius: 999, bgcolor: alpha(AMBER, 0.08), border: `1px solid ${alpha(AMBER, 0.25)}` }}>
                    <Typography sx={{ fontSize: 10, fontWeight: 700, color: AMBER, letterSpacing: 1.5, textTransform: "uppercase" }}>Coming Soon</Typography>
                  </Box>
                )}

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                  <Box>
                    <Typography sx={{ fontSize: { xs: "1.4rem", md: "1.6rem" }, fontWeight: 900, color: "white", lineHeight: 1 }}>
                      {loc.city}
                    </Typography>
                    <Typography sx={{ fontSize: 12, color: "text.secondary", letterSpacing: 2, textTransform: "uppercase", mt: 0.5 }}>
                      {loc.country}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <LocationOnIcon sx={{ fontSize: 16, color: AMBER, mt: 0.2, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: 13, color: "text.secondary", lineHeight: 1.5 }}>
                      {loc.address}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <AccessTimeIcon sx={{ fontSize: 16, color: AMBER, mt: 0.2, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: 13, color: "text.secondary", lineHeight: 1.5 }}>
                      {loc.hours}
                    </Typography>
                  </Box>

                  {!loc.comingSoon && (
                    <Box
                      component="a"
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, fontSize: 12, fontWeight: 600, color: AMBER, textDecoration: "none", mt: 0.5, "&:hover": { color: "primary.main" } }}
                    >
                      View on Google Maps →
                    </Box>
                  )}
                </Box>
              </Card>
            </MotionBox>
          ))}
        </Box>
      </Box>

      {/* ── How It Works ────────────────────────────────────────────── */}
      <Box sx={{ px, pb: sectionGap, maxWidth: 1400, mx: "auto" }}>
        <MotionBox {...fade()}>
          <SectionLabel>Process</SectionLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: 900, mb: { xs: 5, md: 6 } }}>
            How It Works
          </Typography>
        </MotionBox>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <MotionBox key={step.number} {...fade(i * 0.08)}>
                <Card sx={{
                  display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3, alignItems: { sm: "flex-start" },
                  transition: "border-color 0.3s ease",
                  "&:hover": { borderColor: alpha(AMBER, 0.15) },
                }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexShrink: 0 }}>
                    <Typography sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: 900, color: alpha(AMBER, 0.7), lineHeight: 1, minWidth: 48 }}>
                      {step.number}
                    </Typography>
                    <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: alpha(AMBER, 0.07), border: `1px solid ${alpha(AMBER, 0.22)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon sx={{ fontSize: 20, color: AMBER }} />
                    </Box>
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: "white", fontSize: { xs: "1rem", md: "1.1rem" }, mb: 0.75 }}>
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: 14, lineHeight: 1.7 }}>
                      {step.body}
                    </Typography>
                  </Box>
                </Card>
              </MotionBox>
            );
          })}
        </Box>
      </Box>

      {/* ── Payment ─────────────────────────────────────────────────── */}
      <Box sx={{ px, pb: sectionGap, maxWidth: 1400, mx: "auto" }}>
        <MotionBox {...fade()}>
          <SectionLabel>Payment</SectionLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: 900, mb: { xs: 5, md: 6 } }}>
            Deposit & Pricing
          </Typography>
        </MotionBox>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
          {PAYMENT_CARDS.map((card, i) => (
            <MotionBox key={card.title} {...fade(i * 0.1)}>
              <Card sx={{ height: "100%" }}>
                <Typography sx={{ fontSize: "2rem", fontWeight: 900, color: alpha(AMBER, 0.7), lineHeight: 1, mb: 1.5 }}>
                  {card.step}
                </Typography>
                <Typography sx={{ fontWeight: 800, color: "white", fontSize: "1.05rem", mb: 1.5 }}>
                  {card.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 14, lineHeight: 1.7 }}>
                  {card.body}
                </Typography>
              </Card>
            </MotionBox>
          ))}
        </Box>
      </Box>

      {/* ── Before & After ──────────────────────────────────────────── */}
      <Box sx={{ px, pb: sectionGap, maxWidth: 1400, mx: "auto" }}>
        <MotionBox {...fade()}>
          <SectionLabel>Preparation & Aftercare</SectionLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: 900, mb: { xs: 5, md: 6 } }}>
            Before & After Your Session
          </Typography>
        </MotionBox>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
          {/* Before */}
          <MotionBox {...fade(0)}>
            <Card>
              <Typography sx={{ fontWeight: 800, color: "white", fontSize: "1.05rem", mb: 3 }}>
                Before Your Session
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {BEFORE.map((item) => (
                  <Box key={item} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: AMBER, mt: "6px", flexShrink: 0 }} />
                    <Typography sx={{ fontSize: 14, color: "text.secondary", lineHeight: 1.6 }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </MotionBox>

          {/* After */}
          <MotionBox {...fade(0.1)}>
            <Card>
              <Typography sx={{ fontWeight: 800, color: "white", fontSize: "1.05rem", mb: 3 }}>
                Aftercare
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {AFTER.map((item) => (
                  <Box key={item} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: AMBER, mt: "6px", flexShrink: 0 }} />
                    <Typography sx={{ fontSize: 14, color: "text.secondary", lineHeight: 1.6 }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </MotionBox>
        </Box>
      </Box>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <ContactSection />

    </Box>
  );
};

export default Info;
