import { useRequest } from 'ahooks';
import { useState, useCallback } from 'react'
import request from '@/utils/request';

export default function globalModel() {
  const [projects, updateProjects] = useState([])
  const [project, updateProject] = useState<AnyObject>()

  const { run: runQueryProject, loading: loadingQueryProject } = useRequest(async (page = 1, pageSize = 10) => {
    return request.get(`project`, { page, pageSize })
  }, {
    manual: true,
    onSuccess: (res: any) => {
      const { code, data } = res
      if (code == 0) {
        updateProjects(data)
        // 默认选中第一个项目
        if (data.list[0]) {
          updateProject(data.list[0])
        }
      }
    },
  });

  return {
    projects,
    runQueryProject,
    project,
    updateProject
  }
}