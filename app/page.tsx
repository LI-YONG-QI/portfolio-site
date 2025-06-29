'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { XIcon, Link as LinkIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  type Project,
} from './data'
import Image from 'next/image'

import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

function ProjectCarousel({ images }: { images: string[] }) {
  return (
    <div className="relative w-full max-w-2xl">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={image}
                  alt={`Project ${index + 1}`}
                  width={800}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black" />
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black" />
      </Carousel>
    </div>
  )
}

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectContentProps = Omit<Project, 'shortDescription'>

function ProjectContent({
  description,
  title,
  logo,
  link,
  images,
  externalLinks,
}: ProjectContentProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger className="mb-2 flex items-center justify-center">
        <Image src={logo} alt={description} width={100} height={100} />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative max-h-[80vh] w-full max-w-4xl rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <div className="max-h-[calc(80vh-2rem)] overflow-y-auto">
            <div className="flex flex-col items-center gap-4 p-4">
              <Image src={logo} alt={title} width={100} height={100} />
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                {title}
              </h3>
              <div className="flex items-center gap-2 text-zinc-500">
                {externalLinks?.github && (
                  <SocialIcon platform="github" link={externalLinks.github} />
                )}
                {externalLinks?.twitter && (
                  <SocialIcon platform="twitter" link={externalLinks.twitter} />
                )}
                {externalLinks?.discord && (
                  <SocialIcon platform="discord" link={externalLinks.discord} />
                )}
                {externalLinks?.others?.map((other, index) => (
                  <SocialIcon
                    key={index}
                    platform="other"
                    link={other}
                    text={other}
                  />
                ))}
              </div>
              <p className="max-w-2xl text-zinc-500 dark:text-zinc-400">
                {description}
              </p>
              {images && <ProjectCarousel images={images} />}
            </div>
          </div>
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function SocialIcon({
  platform,
  link,
  text,
}: {
  platform: string
  link: string
  text?: string
}) {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return (
          <Image
            src="/external/github-light.svg"
            alt="Github"
            width={20}
            height={20}
          />
        )
      case 'twitter':
        return (
          <Image
            src="/external/x-light.svg"
            alt="Github"
            width={20}
            height={20}
          />
        )
      case 'linkedin':
        return (
          <Image
            src="/external/linkedin.svg"
            alt="LinkedIn"
            width={20}
            height={20}
          />
        )
      case 'other':
        return (
          <Tooltip>
            <TooltipTrigger>
              <LinkIcon width={20} height={20} className="text-white" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{text}</p>
            </TooltipContent>
          </Tooltip>
        )

      default:
        return null
    }
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
    >
      {getIcon(platform)}
      <span className="sr-only">{platform}</span>
    </a>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 text-zinc-600 dark:text-zinc-400">
          <p>Focusing on DeFi / Blockchain research and system development</p>
          <p className="mt-2">
            Exploring any new technologies and building powerful developer tools
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.title} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectContent
                  id={project.id}
                  description={project.description}
                  title={project.title}
                  logo={project.logo}
                  link={project.link}
                  images={project.images}
                  externalLinks={project.externalLinks}
                />
              </div>
              <div className="mt-6 px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.title}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative transform overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] transition-transform duration-300 hover:scale-105 dark:bg-zinc-600/30"
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <SocialIcon
              key={link.label}
              platform={link.label}
              link={link.link}
            />
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
