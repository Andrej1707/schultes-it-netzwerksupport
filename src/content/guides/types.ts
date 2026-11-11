export type GuideCategory = 'sicherheit' | 'windows' | 'wlan' | 'daten' | 'alltag'

export type GuideArticle = {
  slug: string
  title: string
  description: string
  category: GuideCategory
  readMinutes: number
  image: string
  imageAlt: string
  updated: string
  intro: string
  takeaways: string[]
  sections: { heading: string; paragraphs: string[]; steps?: string[]; bullets?: string[] }[]
  pitfall: string
  whenToGetHelp: string
  relatedSlugs: string[]
  servicePath: string
  sources: { title: string; url: string }[]
}

export type GuideSummary = Pick<GuideArticle, 'slug' | 'title' | 'description' | 'category' | 'readMinutes' | 'image' | 'imageAlt' | 'updated'>
export type GuidePageData = { entries: GuideSummary[]; article?: GuideArticle }
