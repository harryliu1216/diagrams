import { useRequest } from 'ahooks';
import { useState, useCallback, useEffect } from 'react'
import request from '@/utils/request';
import { useModel } from 'umi';



export default function globalModel() {
  const [projects, updateProjects] = useState<IListResponse<AnyObject>>({ page: 1, pageSize: 10, list: [] })
  const [project, updateProject] = useState<AnyObject>({})
  const { userInfo } = useModel('userModel')

  useEffect(() => {
    if (userInfo) {
      runQueryProject()
    } else {
      updateProjects({ page: 1, pageSize: 10, list: [] })
    }
  }, [userInfo])

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