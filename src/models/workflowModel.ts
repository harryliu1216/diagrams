import { useRequest } from 'ahooks';
import { useState, useCallback, useEffect } from 'react'
import request from '@/utils/request';
import { useModel } from 'umi';

export default function workflowModel() {
  const [workflow, updateWorkflow] = useState([])
  const { project } = useModel('projectModel')

  useEffect(() => {
    if (project) {
      runQueryWorkflow(project.id)
    }
  }, [project])

  const { run: runQueryWorkflow, loading: loadingQueryProject } = useRequest(async (projectId) => {
    return request.get(`workflow`, { params: { projectId } })
  }, {
    manual: true,
    onSuccess: (res: any) => {
      const { code, data } = res
      if (code == 0) {
        updateWorkflow(data)
      }
    },
  });

  return {
    workflow,
    runQueryWorkflow,
  }
}