import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
      className,
    }: {
      src: string
      alt: string
      caption: string
      className?: string
    }) => {
      return (
        <figure
          className={`not-prose my-8 flex flex-col items-center ${className || ''}`}
        >
          <img
            src={src}
            alt={alt}
            className="mx-auto block max-w-md rounded-xl"
            style={{ margin: '0 auto' }}
          />
          <figcaption className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
            {caption}
          </figcaption>
        </figure>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
    // 防止 KaTeX 數學表達式被重複處理
    span: ({
      children,
      className,
      ...props
    }: ComponentPropsWithoutRef<'span'>) => {
      // 如果是 KaTeX 渲染的內聯數學表達式，直接返回
      if (className?.includes('katex') || className?.includes('math-inline')) {
        return (
          <span className={className} {...props}>
            {children}
          </span>
        )
      }
      return (
        <span className={className} {...props}>
          {children}
        </span>
      )
    },
    div: ({
      children,
      className,
      ...props
    }: ComponentPropsWithoutRef<'div'>) => {
      // 如果是 KaTeX 渲染的塊級數學表達式，直接返回
      if (
        className?.includes('katex-display') ||
        className?.includes('math-display')
      ) {
        return (
          <div className={className} {...props}>
            {children}
          </div>
        )
      }
      return (
        <div className={className} {...props}>
          {children}
        </div>
      )
    },
    // 表格組件
    table: ({ children, ...props }: ComponentPropsWithoutRef<'table'>) => (
      <div className="my-6 overflow-x-auto">
        <table
          className="w-full border-collapse border border-gray-300 text-sm dark:border-gray-600"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }: ComponentPropsWithoutRef<'thead'>) => (
      <thead className="bg-gray-50 dark:bg-gray-800" {...props}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }: ComponentPropsWithoutRef<'tbody'>) => (
      <tbody {...props}>{children}</tbody>
    ),
    tr: ({ children, ...props }: ComponentPropsWithoutRef<'tr'>) => (
      <tr className="border-b border-gray-200 dark:border-gray-700" {...props}>
        {children}
      </tr>
    ),
    th: ({ children, ...props }: ComponentPropsWithoutRef<'th'>) => (
      <th
        className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-900 dark:border-gray-600 dark:text-gray-100"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }: ComponentPropsWithoutRef<'td'>) => (
      <td
        className="border border-gray-300 px-4 py-2 text-gray-700 dark:border-gray-600 dark:text-gray-300"
        {...props}
      >
        {children}
      </td>
    ),
  }
}
