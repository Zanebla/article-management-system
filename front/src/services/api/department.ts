// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 此处后端没有提供注释 POST /api/department/addDepartment */
export async function addDepartment(body: API.DepartmentDTO, options?: { [key: string]: any }) {
  return request<number>('/api/department/addDepartment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/department/deleteDepartment */
export async function deleteDepartment(body: number[], options?: { [key: string]: any }) {
  return request<any>('/api/department/deleteDepartment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/department/fullSearch */
export async function search(body: API.KeywordQueryDTO, options?: { [key: string]: any }) {
  return request<API.PageLuceneResultBookVO>('/api/department/fullSearch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/department/getDepartmentByCode */
export async function getDepartmentByCode(options?: { [key: string]: any }) {
  return request<string>('/api/department/getDepartmentByCode', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/department/listDepartment */
export async function listDepartment(
  body: API.DepartmentQueryDTO,
  options?: { [key: string]: any },
) {
  return request<API.PageDepartmentVO>('/api/department/listDepartment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/department/updateDepartment */
export async function updateDepartment(body: API.DepartmentDTO, options?: { [key: string]: any }) {
  return request<number>('/api/department/updateDepartment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
