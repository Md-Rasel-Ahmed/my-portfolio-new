import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Portfolio Message from {name}</Preview>
      <Body
        style={{
          backgroundColor: "#090d16",
          fontFamily: "sans-serif",
          padding: "20px 0",
          color: "#ffffff",
        }}
      >
        <Container
          style={{
            backgroundColor: "#111827",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "32px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Heading
            style={{ color: "#8b5cf6", fontSize: "22px", marginBottom: "16px" }}
          >
            📬 New Portfolio Message
          </Heading>
          <Hr
            style={{ borderColor: "rgba(255,255,255,0.1)", margin: "20px 0" }}
          />
          <Section>
            <Text
              style={{
                fontSize: "15px",
                color: "#d1d5db",
                marginBottom: "8px",
              }}
            >
              <strong>From:</strong> {name} ({email})
            </Text>
            <Text
              style={{
                fontSize: "15px",
                color: "#d1d5db",
                whiteSpace: "pre-wrap",
                marginTop: "16px",
              }}
            >
              <strong>Message:</strong>
              <br />
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;
