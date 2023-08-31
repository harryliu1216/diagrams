import { useRequest } from 'ahooks';
import { useState, useCallback, useEffect } from 'react'
import request from '@/utils/request';
import { useModel } from 'umi';

export default function tableModel() {
  const [tables, updateTables] = useState([])
  const { project } = useModel('projectModel')

  useEffect(() => {
    if (project) {
      runQueryTable(project.id)
    }
  }, [project])

  const { run: runQueryTable, loading: loadingQueryProject } = useRequest(async (projectId) => {
    return request.get(`table`, { params: { projectId } })
  }, {
    manual: true,
    onSuccess: (res: any) => {
      const { code, data } = res
      if (code == 0) {
        updateTables(data)
      }
    },
  });

  return {
    tables,
    runQueryTable,
  }
}