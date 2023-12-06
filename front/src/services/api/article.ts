// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 此处后端没有提供注释 POST /api/article/addArticle */
export async function addArticle(body: API.ArticleDTO, options?: { [key: string]: any }) {
  return request<any>('/api/article/addArticle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/article/deleteArticle */
export async function deleteArticle(body: number[], options?: { [key: string]: any }) {
  return request<any>('/api/article/deleteArticle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/article/fullSearch */
export async function search1(
  body: API.ArticleFullSearchQueryDTO,
  options?: { [key: string]: any },
) {
  return request<API.PageLuceneResultBookVO>('/api/article/fullSearch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/article/getArticleByCode */
export async function getArticleByCode(options?: { [key: string]: any }) {
  return request<string>('/api/article/getArticleByCode', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/article/listArticle */
export async function listArticle(body: API.ArticleQueryDTO, options?: { [key: string]: any }) {
  return request<API.PageArticleVO>('/api/article/listArticle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/article/updateArticle */
export async function updateArticle(body: API.ArticleDTO, options?: { [key: string]: any }) {
  return request<number>('/api/article/updateArticle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
