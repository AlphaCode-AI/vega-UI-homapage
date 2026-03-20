"use client";

import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabTrigger,
  TabContent,
  Button,
  Badge,
  Avatar,
  Card,
  CardMenu,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardFooterUser,
  CardFooterInfo,
  MoreVertical, Heart, MessageCircle, Download, Calendar, User, ChevronRight,
} from "@alphacode-ai/design-system";
import TableOfContents, { TocItem } from "@/app/components/TableOfContents";
import CodeBlock from "@/app/components/CodeBlock";

/* ─────────────────────────────────────────
   TOC
───────────────────────────────────────── */
const toc: TocItem[] = [
  { id: "style",    label: "Style" },
  { id: "anatomy",  label: "Anatomy" },
  { id: "header",   label: "Header" },
  { id: "contents", label: "Contents" },
  { id: "footer",   label: "Footer" },
  { id: "state",    label: "State" },
  { id: "usage",    label: "사용 가이드" },
];

/* ─────────────────────────────────────────
   Shared Card previews
───────────────────────────────────────── */
const SampleCard = ({ variant, className }: { variant: "background" | "line" | "shadow"; className?: string }) => (
    <Card variant={variant} shadowSize="md" className={`w-full max-w-[220px] ${className ?? ""}`}>
      <CardMenu>
        <MoreVertical className="h-4 w-4" />
      </CardMenu>
      <CardContent>
        <CardTitle>Title text</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur. Sed arcu praesent at sed interdum.
          Adipiscing lectus nunc vel ut imperdiet. Lorem ipsum dolor sit amet
          consectetur. Sed arcu praesent at sed interdum.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="tertiary" size="sm">Tertiary</Button>
        <Button variant="secondary" size="sm">Secondary</Button>
      </CardFooter>
    </Card>
  );

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function CardPage() {
  const [activeTab, setActiveTab] = useState("docs");

  return (
    <div className="flex w-full">
      {/* ── Main content ── */}
      <div className="flex-1 min-w-0 px-10 py-8">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Cards</h1>
          <p className="text-sm text-foreground leading-relaxed">
            카드는 관련 콘텐츠를 하나의 컨테이너로 묶어 정보를 시각적으로 구조화합니다.
            카드, 티저, 목록 항목처럼 카드가 포함될 수 있는 공간을 정의하고, 이미지,
            텍스트, 링크 등 다양한 유형의 미디어를 함께 표시할 수 있습니다.
          </p>
        </div>

        {/* Docs / Code Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabList>
            <TabTrigger value="docs">Docs</TabTrigger>
            <TabTrigger value="code">Code</TabTrigger>
          </TabList>

          {/* ══════════ DOCS ══════════ */}
          <TabContent value="docs" className="mt-6 space-y-12">

            {/* ── Style ── */}
            <section id="style">
              <h2 className="text-lg font-semibold text-foreground mb-1">Style</h2>
              <p className="text-sm text-foreground mb-4">
                카드는 세 가지 스타일 변형을 제공합니다. variant prop으로 선택할 수 있으며,
                각각 background-color, line(테두리), shadow(그림자)로 구분됩니다.
              </p>
              <div>
                <div className="grid grid-cols-3 gap-8">
                  {/* background-color */}
                  <div className="flex flex-col items-center gap-3 p-8 bg-ac-gray-10 rounded-lg">
                    <p className="text-xs text-foreground">background-color</p>
                    <SampleCard variant="background" className="bg-ac-blue-10" />
                  </div>
                  {/* line */}
                  <div className="flex flex-col items-center gap-3 p-8 bg-ac-gray-10 rounded-lg">
                    <p className="text-xs text-foreground">line</p>
                    <SampleCard variant="line" />
                  </div>
                  {/* shadow */}
                  <div className="flex flex-col items-center gap-3 p-8 bg-ac-gray-10 rounded-lg">
                    <p className="text-xs text-foreground">shadow</p>
                    <SampleCard variant="shadow" />
                  </div>
                </div>
              </div>
            </section>

            {/* ── Anatomy ── */}
            <section id="anatomy">
              <h2 className="text-lg font-semibold text-foreground mb-1">Anatomy</h2>
              <p className="text-sm text-foreground mb-4">
                카드는 Header, Content, Footer 세 영역으로 구성되며, 각 영역은 독립적으로 사용하거나
                조합해서 활용할 수 있습니다. 카드 우측 상단에는 CardMenu로 더보기 버튼을 배치할 수 있습니다.
              </p>
              <div className="border border-border rounded-lg p-6 bg-card flex justify-center">
                <div className="relative w-[280px]">
                  <Card variant="line" className="w-full">
                    <CardMenu>
                      <MoreVertical className="h-4 w-4" />
                    </CardMenu>
                    <CardContent>
                      <CardTitle>Title text</CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet consectetur. Sed arcu praesent at sed interdum.
                        Adipiscing lectus nunc vel ut imperdiet. Lorem ipsum dolor sit amet consectetur.
                        Sed arcu praesent at sed interdum. Adipiscing lectus nunc vel ut imperdiet. posuere
                        ipsum faucibus vel sed nonmice lectus nulla. Dictum felis sit ac ipsum maecenas
                        adipiscing ante donec. Gravida ullamcorper sem.
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="tertiary" size="sm">Tertiary</Button>
                      <Button variant="secondary" size="sm">Secondary</Button>
                    </CardFooter>
                  </Card>
                  {/* Annotation dots */}
                  <span className="absolute -left-3 top-3 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white text-[10px] font-bold">1</span>
                  <span className="absolute -right-3 top-[45%] h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white text-[10px] font-bold">2</span>
                  <span className="absolute -left-3 bottom-3 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white text-[10px] font-bold">3</span>
                </div>
              </div>
              <div className="mt-3 space-y-1 text-sm text-foreground">
                <p>1. 헤더: 이미지 헤더 영역</p>
                <p>2. 컨텐츠: 타이틀 및 내용 영역</p>
                <p>3. 푸터: 액션 버튼 영역</p>
              </div>
              <p className="mt-2 text-xs text-foreground">각 구성 요소에 대한 설명은 아래 섹션을 참고해 주세요.</p>
            </section>

            {/* ── Header ── */}
            <section id="header">
              <h2 className="text-lg font-semibold text-foreground mb-1">Header</h2>
              <p className="text-sm text-foreground mb-4">
                카드의 헤더는 이미지 타입, 아바타 타입, 텍스트 타입으로 나뉩니다.
                각 타입은 CardHeader의 prop으로 제어할 수 있으며, 배지나 액션 버튼을 함께 표시할 수 있습니다.
              </p>
              <div className="border border-border rounded-lg p-6 bg-card">
                <div className="grid grid-cols-3 gap-6">
                  {/* 이미지 타입 */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-foreground">이미지 타입</p>
                    <Card variant="line" className="w-full">
                      <CardHeader
                        imageSrc="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=200&fit=crop"
                        imageAlt="sample"
                        badge={<Badge variant="primary">Badge</Badge>}
                      />
                      <CardContent>
                        <CardTitle>Title text</CardTitle>
                      </CardContent>
                    </Card>
                    <p className="text-xs text-foreground">이미지 타입 설명: 카드 헤더에 이미지를 배치하는 타입입니다. imageSrc, imageAlt prop을 사용하며, badge 를 함께 표시할 수 있습니다.</p>
                  </div>
                  {/* 아바타 타입 */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-foreground">아바타 타입</p>
                    <Card variant="line" className="w-full">
                      <CardMenu>
                        <MoreVertical className="h-4 w-4" />
                      </CardMenu>
                      <CardHeader
                        avatar={
                          <Avatar className="h-8 w-8" src="https://i.pravatar.cc/32" fallback="AB" />
                        }
                        title="Title text"
                        subtitle="User Name"
                      />
                      <CardContent>
                        <CardDescription>
                          Lorem ipsum dolor sit amet consectetur. Phasellus arcu consectetuer.
                          Morbi cursus vitae viverra dignissim.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    <p className="text-xs text-foreground">아바타 타입 설명: 아바타와 함께 작성자 정보를 표시하는 타입입니다. avatar, title, subtitle prop을 사용합니다.</p>
                  </div>
                  {/* 텍스트 타입 */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-foreground">텍스트 타입</p>
                    <Card variant="line" className="w-full">
                      <CardMenu>
                        <MoreVertical className="h-4 w-4" />
                      </CardMenu>
                      <CardHeader
                        title="Title text"
                        subtitle="Lorem ipsum dolor sit amet"
                        badge={<Badge>New</Badge>}
                      />
                      <CardContent>
                        <CardDescription>
                          Lorem ipsum dolor sit amet consectetur. Phasellus arcu consectetuer.
                          Morbi cursus vitae viverra dignissim.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    <p className="text-xs text-foreground">텍스트 타입 설명: 제목, 부제목만 표시하는 타입입니다. title, subtitle, badge prop을 사용합니다.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Contents ── */}
            <section id="contents">
              <h2 className="text-lg font-semibold text-foreground mb-1">Contents</h2>
              <p className="text-sm text-foreground mb-4">
                카드 컨텐츠 영역은 제목(CardTitle)과 설명(CardDescription)을 포함합니다.
                필요에 따라 타이틀 없이 설명만 표시하거나, 두 가지를 함께 사용하는 타입을 선택할 수 있습니다.
              </p>
              <div className="border border-border rounded-lg p-6 bg-card">
                <div className="grid grid-cols-2 gap-6">
                  {/* 텍스트 타입 */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-foreground">텍스트 타입</p>
                    <Card variant="line" className="w-full">
                      <CardContent>
                        <CardTitle>텍스트 타입</CardTitle>
                        <CardDescription>
                          Lorem ipsum dolor sit amet consectetur. Viverra lacinia porttitor
                          class-neque urna vestibulum velit vulputate. Morbi cursus et ut nec
                          massa urna vehicula nisl est. Viverra dignissim. Morbi cursus et ut
                          vehicula nisl vel. Lorem ipsum dolor sit amet consectetur.
                        </CardDescription>
                        <CardDescription>
                          두번째 단락이 필요할 경우 CardDescription을 반복해서 사용합니다. 텍스트 타입
                          카드는 이미지 없이 텍스트로만 내용을 표현합니다.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  {/* 타이틀 타입 */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-foreground">타이틀 타입</p>
                    <Card variant="line" className="w-full">
                      <CardContent>
                        <CardTitle>타이틀만 있는 경우</CardTitle>
                        <CardDescription>
                          Lorem ipsum dolor sit amet consectetur. Viverra lacinia porttitor
                          class-neque urna vestibulum velit vulputate. Morbi cursus et ut nec
                          massa urna vehicula nisl est. Viverra dignissim.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Footer ── */}
            <section id="footer">
              <h2 className="text-lg font-semibold text-foreground mb-1">Footer</h2>
              <p className="text-sm text-foreground mb-4">
                카드 푸터는 사용자 정보(user 타입), 버튼(button 타입), 메타 정보(info 타입) 세 가지 형태로 구성됩니다.
                divider prop으로 컨텐츠와 푸터 사이의 구분선을 제어할 수 있습니다.
              </p>
              <div className="border border-border rounded-lg p-6 bg-card">
                <div className="grid grid-cols-3 gap-6">
                  {/* 사용자 타입 */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-foreground">사용자 타입</p>
                    <Card variant="line" className="w-full">
                      <CardContent>
                        <CardTitle>Title text</CardTitle>
                        <CardDescription>Lorem ipsum dolor sit amet consectetur.</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <CardFooterUser
                          avatar={
                            <Avatar className="h-7 w-7" src="https://i.pravatar.cc/28" fallback="UN" />
                          }
                          name="User Name"
                          sub="User information"
                          action={<ChevronRight className="h-4 w-4 text-foreground" />}
                        />
                      </CardFooter>
                    </Card>
                    <p className="text-xs text-foreground">사용자 정보, 아바타, 이름, 부가 설명 및 우측 액션 아이콘을 표시하는 사용자 타입 푸터입니다.</p>
                  </div>
                  {/* 버튼 타입 */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-foreground">버튼 타입</p>
                    <Card variant="line" className="w-full">
                      <CardContent>
                        <CardTitle>Title text</CardTitle>
                        <CardDescription>Lorem ipsum dolor sit amet consectetur.</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="tertiary" size="sm">Tertiary</Button>
                        <Button variant="secondary" size="sm">Secondary</Button>
                      </CardFooter>
                    </Card>
                    <p className="text-xs text-foreground">액션 버튼을 배치하는 버튼 타입 푸터입니다. Button 컴포넌트를 CardFooter 내에 배치합니다.</p>
                  </div>
                  {/* 정보 타입 */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-foreground">정보 타입</p>
                    <Card variant="line" className="w-full">
                      <CardContent>
                        <CardTitle>Title text</CardTitle>
                        <CardDescription>Lorem ipsum dolor sit amet consectetur.</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <CardFooterInfo
                          items={[
                            { icon: <User className="h-3 w-3" />, label: "1,234" },
                            { icon: <Calendar className="h-3 w-3" />, label: "2024/03/22" },
                          ]}
                          action={<MoreVertical className="h-4 w-4" />}
                        />
                      </CardFooter>
                    </Card>
                    <p className="text-xs text-foreground">아이콘과 텍스트로 메타 정보를 표시하는 정보 타입 푸터입니다. items 배열로 항목을 구성합니다.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── State ── */}
            <section id="state">
              <h2 className="text-lg font-semibold text-foreground mb-1">State</h2>
              <p className="text-sm text-foreground mb-4">
                interactive prop이 true인 카드는 Default / Hover / Active 세 가지 상태를 가집니다.
                각 상태마다 shadow와 border 스타일이 다르게 적용됩니다.
              </p>

              {/* 이미지 카드 상태 */}
              <div className="border border-border rounded-lg p-6 bg-card mb-6">
                <div className="grid grid-cols-3 gap-6">
                  {(["Default", "Hover", "Active"] as const).map((state) => (
                    <div key={state} className="flex flex-col gap-3">
                      <p className="text-xs text-foreground">{state}</p>
                      <Card
                        variant="shadow"
                        shadowSize="lg"
                        interactive={state === "Active"}
                        className={
                          state === "Active"
                            ? "border border-ac-primary-50"
                            : undefined
                        }
                      >
                        <CardHeader
                          imageSrc="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=200&fit=crop"
                          imageAlt="sample"
                        />
                        <CardContent>
                          <CardTitle>사을 콘텐 아이콘별 - 50일</CardTitle>
                        </CardContent>
                        <CardFooter>
                          <CardFooterInfo
                            items={[
                              { icon: <User className="h-3 w-3" />, label: "1,234" },
                              { icon: <Calendar className="h-3 w-3" />, label: "2024/02/20" },
                            ]}
                          />
                        </CardFooter>
                      </Card>
                      <p className="text-xs text-foreground font-mono">
                        {state === "Default" && "top: 10px\nbox-shadow: shadow-lg"}
                        {state === "Hover" && "top: 10px\nbox-shadow: shadow-lg"}
                        {state === "Active" && "border: 1px solid ac-primary-50"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 공지 카드 상태 */}
              <div className="border border-border rounded-lg p-6 bg-card mb-6">
                <div className="grid grid-cols-3 gap-6">
                  {(["Default", "Hover", "Active"] as const).map((state) => (
                    <div key={state} className="flex flex-col gap-3">
                      <p className="text-xs text-foreground">{state}</p>
                      <Card
                        variant="shadow"
                        shadowSize="lg"
                        interactive={state === "Active"}
                        className={
                          state === "Active"
                            ? "border border-ac-primary-50"
                            : undefined
                        }
                      >
                        <CardHeader
                          avatar={
                            <div className="h-8 w-8 bg-ac-gray-20 rounded-md flex items-center justify-center">
                              <MessageCircle className="h-4 w-4 text-foreground" />
                            </div>
                          }
                          title="신규 입사자 공지"
                        />
                        <CardContent>
                          <CardFooterUser
                            avatar={
                              <Avatar className="h-7 w-7" fallback="MJ" />
                            }
                            name="Moon Ji soon"
                            sub="User information"
                          />
                        </CardContent>
                      </Card>
                      <p className="text-xs text-foreground font-mono">
                        {state === "Default" && "top: 10px\nbox-shadow: shadow-lg"}
                        {state === "Hover" && "top: 10px\nbox-shadow: shadow-lg"}
                        {state === "Active" && "border-color: primary-50"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 텍스트 카드 상태 */}
              <div className="border border-border rounded-lg p-6 bg-card">
                <div className="grid grid-cols-3 gap-6">
                  {(["Default", "Hover", "Active"] as const).map((state) => (
                    <div key={state} className="flex flex-col gap-3">
                      <p className="text-xs text-foreground">{state}</p>
                      <Card
                        variant="shadow"
                        shadowSize="lg"
                        interactive={state === "Active"}
                        className={
                          state === "Active"
                            ? "border border-ac-primary-50"
                            : undefined
                        }
                      >
                        <CardContent>
                          <CardTitle>테스트 문서 배포</CardTitle>
                          <CardDescription>
                            알파코드: 유스어 관련 최신 문서 배포
                          </CardDescription>
                          <CardFooterUser
                            avatar={
                              <Avatar className="h-7 w-7" fallback="AD" />
                            }
                            name="Admin"
                            sub="2024/11/11 15:34:22"
                          />
                        </CardContent>
                      </Card>
                      <p className="text-xs text-foreground font-mono">
                        {state === "Default" && "top: 10px\nbox-shadow: shadow-lg"}
                        {state === "Hover" && "top: 10px\nbox-shadow: shadow-lg"}
                        {state === "Active" && "border: 1px solid primary-50"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 사용 가이드 ── */}
            <section id="usage">
              <h2 className="text-lg font-semibold text-foreground mb-1">사용 가이드</h2>
              <p className="text-sm text-foreground mb-6">
                카드를 사용할 때는 아래 가이드를 참고해 주세요.
              </p>

              {/* 사용 예시 */}
              <h3 className="text-sm font-semibold text-foreground mb-4">사용 예시</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* 이미지 카드 예시 */}
                <Card variant="line" className="w-full">
                  <CardHeader
                    imageSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop"
                    imageAlt="MRI Data Set"
                  />
                  <CardContent>
                    <CardTitle>MRI Data Set</CardTitle>
                    <CardDescription>310,449개의 이미지가 있습니다.</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <CardFooterInfo
                      items={[
                        { icon: <User className="h-3 w-3" />, label: "90,711" },
                        { icon: <Heart className="h-3 w-3" />, label: "1,206,448" },
                      ]}
                      action={<Download className="h-4 w-4" />}
                    />
                  </CardFooter>
                </Card>

                {/* 텍스트 카드 예시 */}
                <Card variant="line" className="w-full">
                  <CardHeader
                    imageSrc="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=200&fit=crop"
                    imageAlt="Love wins all"
                    badge={<Badge variant="primary">Badge</Badge>}
                  />
                  <CardContent>
                    <CardTitle>Love wins all</CardTitle>
                    <CardDescription>아이유</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <CardFooterInfo
                      items={[
                        { icon: <Heart className="h-3 w-3" />, label: "130" },
                        { icon: <MessageCircle className="h-3 w-3" />, label: "546" },
                      ]}
                      action={<MoreVertical className="h-4 w-4" />}
                    />
                  </CardFooter>
                </Card>
              </div>

              {/* Do / Don't */}
              <div className="grid grid-cols-2 gap-6">
                {/* Do */}
                <div className="flex flex-col gap-3">
                  <div className="border-2 border-green-500 rounded-lg overflow-hidden">
                    <Card variant="line" className="w-full border-0 rounded-none">
                      <CardContent>
                        <CardDescription>
                          없앨 수 있을 때 없어 먹 나 박수도... 라는데 나나 125인
                          울적할 때 박수를 쳐요. 손을 마주쳐봐요.
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <CardFooterUser
                          avatar={
                            <Avatar className="h-7 w-7" fallback="한" />
                          }
                          name="한지숙"
                          sub="2024/01/11"
                          action={<Button variant="secondary" size="xs">답글 쓰기</Button>}
                        />
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-green-600 font-semibold text-sm">Do</span>
                  </div>
                </div>

                {/* Don't */}
                <div className="flex flex-col gap-3">
                  <div className="border-2 border-red-500 rounded-lg overflow-hidden">
                    <Card variant="line" className="w-full border-0 rounded-none">
                      <CardHeader
                        avatar={
                          <Avatar className="h-8 w-8" fallback="MO" />
                        }
                        title="메뉴얼 수정본 - 4521"
                        badge={<Badge>Badge</Badge>}
                      />
                      <CardContent>
                        <CardDescription>
                          (내용 없음 - 컨텐츠 없이 헤더와 푸터만 사용하는 경우)
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="tertiary" size="sm">취소</Button>
                        <Button variant="secondary" size="sm">업로드</Button>
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-red-600 font-semibold text-sm">Don't</span>
                  </div>
                </div>
              </div>
            </section>

          </TabContent>

          {/* ══════════ CODE ══════════ */}
          <TabContent value="code" className="mt-6 space-y-8">

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">Import</h2>
              <CodeBlock code={`import {
  Card,
  CardMenu,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardFooterUser,
  CardFooterInfo,
} from "@alphacode-ai/design-system";`} />
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">Basic Usage</h2>
              <CodeBlock code={`<Card variant="line">
  <CardMenu>
    <MoreVertical className="h-4 w-4" />
  </CardMenu>
  <CardContent>
    <CardTitle>Title text</CardTitle>
    <CardDescription>
      Lorem ipsum dolor sit amet consectetur.
    </CardDescription>
  </CardContent>
  <CardFooter>
    <Button variant="tertiary" size="sm">Tertiary</Button>
    <Button variant="secondary" size="sm">Secondary</Button>
  </CardFooter>
</Card>`} />
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">With Image Header</h2>
              <CodeBlock code={`<Card variant="line">
  <CardHeader
    imageSrc="/path/to/image.jpg"
    imageAlt="Image description"
    badge={<Badge variant="secondary">Badge</Badge>}
  />
  <CardContent>
    <CardTitle>Title text</CardTitle>
    <CardDescription>Content description</CardDescription>
  </CardContent>
  <CardFooter>
    <CardFooterInfo
      items={[
        { icon: <User className="h-3 w-3" />, label: "1,234" },
        { icon: <Calendar className="h-3 w-3" />, label: "2024/03/22" },
      ]}
    />
  </CardFooter>
</Card>`} />
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">With Avatar Header</h2>
              <CodeBlock code={`<Card variant="line">
  <CardMenu>
    <MoreVertical className="h-4 w-4" />
  </CardMenu>
  <CardHeader
    avatar={
      <Avatar className="h-8 w-8" src="/avatar.png" fallback="AB" />
    }
    title="Title text"
    subtitle="User Name"
  />
  <CardContent>
    <CardDescription>Content description</CardDescription>
  </CardContent>
</Card>`} />
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">Interactive Card</h2>
              <CodeBlock code={`<Card
  variant="shadow"
  shadowSize="lg"
  interactive={true}
  onClick={() => console.log("clicked")}
>
  <CardHeader
    imageSrc="/path/to/image.jpg"
    imageAlt="Image description"
  />
  <CardContent>
    <CardTitle>Clickable Card</CardTitle>
    <CardDescription>This card is interactive.</CardDescription>
  </CardContent>
</Card>`} />
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">Props</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 2fr", gap: "0" }} className="border border-border rounded-lg overflow-hidden text-sm">
                {/* Header */}
                {["Prop", "Type", "Default", "Description"].map((h) => (
                  <div key={h} className="px-3 py-2 bg-ac-gray-10 font-semibold text-foreground border-b border-border">
                    {h}
                  </div>
                ))}
                {/* Rows */}
                {[
                  ["variant", '"background" | "line" | "shadow"', '"line"', "카드 스타일 변형"],
                  ["interactive", "boolean", "false", "클릭 인터랙션 활성화 여부"],
                  ["shadowSize", '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"', '"md"', 'variant="shadow" 일 때 그림자 크기'],
                ].map(([prop, type, def, desc], i) => (
                  <React.Fragment key={i}>
                    <div className="px-3 py-2 border-b border-border font-mono text-xs text-ac-primary-50">{prop}</div>
                    <div className="px-3 py-2 border-b border-border font-mono text-xs text-foreground">{type}</div>
                    <div className="px-3 py-2 border-b border-border font-mono text-xs text-foreground">{def}</div>
                    <div className="px-3 py-2 border-b border-border text-xs text-foreground">{desc}</div>
                  </React.Fragment>
                ))}
              </div>
            </section>

          </TabContent>
        </Tabs>
      </div>

      {/* ── TOC (Docs 탭에서만 표시) ── */}
      {activeTab === "docs" && <TableOfContents items={toc} />}
    </div>
  );
}