import { useRequest } from 'ahooks';
import { useState, useCallback, useEffect } from 'react'
import request from '@/utils/request';
import { useModel } from 'umi';


export default function workflowModel() {
  const [workflows, updateWorkflows] = useState({ list: [], page: 1, pageSize: 10 })
  const { project } = useModel('projectModel')

  useEffect(() => {
    if (project) {
      runQueryWorkflow(project.id)
    }
  }, [project])

  const { run: runQueryWorkflow, loading: loadingQueryProject } = useRequest(async (project) => {
    return request.get(`workflow`, { params: { project } })
  }, {
    manual: true,
    onSuccess: (res: any) => {
      const { code, data } = res
      if (code == 0) {
        updateWorkflows(data)
      }
    },
  });

  const { runAsync: runQueryDetailAsync, loading: loadingDeleteProject } = useRequest(async (id) => {
    return request.get(`workflow/${id}`)
  }, {
    manual: true,
    onSuccess: (res: any) => {
      const { code, data } = res
      if (code == 0 && project) {
        runQueryWorkflow(project.id)
      }
    },
  });

  const { run: runDeleteWorkflow, loading: loadingQueryInfo } = useRequest(async (projectId) => {
    return request.delete(`workflow/${projectId}`, { params: { projectId } })
  }, {
    manual: true,
    onSuccess: (res: any) => {
      const { code, data } = res
      if (code == 0 && project) {
        runQueryWorkflow(project.id)
      }
    },
  });

  const { runAsync: runSaveWorkflowAsync, loading: loadingQueryDetail } = useRequest(async (projectId, name, nodes, edges, id?: string) => {
    return request.post(`workflow`, { data: { project: projectId, name, nodes, edges, id } })
  }, {
    manual: true
  });

  return {
    workflows,
    runQueryWorkflow,
    runDeleteWorkflow,
    runSaveWorkflowAsync,
    runQueryDetailAsync,
    loadingQueryDetail
  }
}