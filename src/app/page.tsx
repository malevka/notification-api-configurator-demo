"use client";

import Title from "@/components/ui/Title";

import Editor from "@/components/features/editor/Editor";
import NotificationSender from "@/components/features/notification/NotificationSender";
import Output from "@/components/features/output/Output";
import Header from "@/components/layout/Header";
import FlexContainer from "@/components/ui/FlexContainer";
import Section from "@/components/ui/Section";
import Wrapper from "@/components/ui/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <h1>Notification API Configurator</h1>
      </Header>

      <FlexContainer $wrap="wrap" $gap="2rem">
        <Section>
          <Title $marginBottom="2rem">Configurator</Title>
          <Editor />
        </Section>
        <Section>
          <Title $marginBottom="2rem">Output</Title>
          <Output />
          <NotificationSender $margin="1rem 0 0 0" />
        </Section>
      </FlexContainer>
    </Wrapper>
  );
}
