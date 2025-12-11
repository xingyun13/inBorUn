import React, { useEffect, useState } from 'react';
import { SolutionDetail as SolutionDetailType, CategoryNode } from '../types';
import { ArrowLeft, Database, Grid, ChevronRight, ChevronDown } from 'lucide-react';

interface SolutionDetailProps {
  content: SolutionDetailType;
  onBack: () => void;
  type: string;
  onCategoryChange: (id: string) => void;
}

const SolutionDetail: React.FC<SolutionDetailProps> = ({ content, onBack }) => {
  const [activeId, setActiveId] = useState<string>(content.rootCategories[0]?.id || '');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set([content.rootCategories[0]?.id || '']));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const findNode = (nodes: CategoryNode[], id: string): CategoryNode | undefined => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findNode(node.children, id);
        if (found) return found;
      }
    }
    return undefined;
  };

  const activeNode = findNode(content.rootCategories, activeId);

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  const handleSidebarClick = (node: CategoryNode) => {
    setActiveId(node.id);
    if (node.children && !expandedIds.has(node.id)) {
        setExpandedIds(prev => new Set(prev).add(node.id));
    }
  };

  const handleChildClick = (child: CategoryNode) => {
    setActiveId(child.id);
    // Ensure parent is expanded in sidebar when clicking from main view
    // We can assume the current activeNode is the parent
    if (activeNode && !expandedIds.has(activeNode.id)) {
        setExpandedIds(prev => new Set(prev).add(activeNode.id));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Back Button */}
        <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-4">
           <button 
              onClick={onBack}
              className="flex items-center text-slate-600 hover:text-tech-600 transition-colors group font-medium"
            >
              <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              {content.backButton}
            </button>
            <div className="text-sm text-slate-400">
                Home / Catalog / <span className="text-tech-600 font-medium capitalize">{activeNode?.name || 'Select'}</span>
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Sidebar (Hierarchical) */}
          <div className="w-full md:w-64 flex-shrink-0 flex flex-col h-full">
            <div className="bg-tech-600 text-white p-4 font-bold text-lg text-center shadow-md rounded-t-lg">
              {content.sidebarTitle}
            </div>
            <div className="bg-white border border-slate-200 rounded-b-lg overflow-hidden">
              {content.rootCategories.map((brand) => (
                <div key={brand.id} className="border-b border-slate-100 last:border-0">
                  {/* Parent Item */}
                  <div 
                    className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors
                      ${activeId === brand.id 
                        ? 'bg-tech-50 text-tech-700 border-l-4 border-l-tech-600' 
                        : 'text-slate-700 hover:bg-slate-50 border-l-4 border-l-transparent'
                      }`}
                    onClick={() => handleSidebarClick(brand)}
                  >
                    <span className="font-medium text-sm">{brand.name}</span>
                    {brand.children && brand.children.length > 0 && (
                      <button 
                        onClick={(e) => toggleExpand(brand.id, e)}
                        className="p-1 hover:bg-black/5 rounded-full text-slate-400"
                      >
                        {expandedIds.has(brand.id) 
                          ? <ChevronDown size={14} /> 
                          : <ChevronRight size={14} />
                        }
                      </button>
                    )}
                  </div>

                  {/* Children Items */}
                  {brand.children && expandedIds.has(brand.id) && (
                    <div className="bg-slate-50 border-t border-slate-100 shadow-inner">
                      {brand.children.map((child) => (
                         <div 
                           key={child.id}
                           onClick={() => setActiveId(child.id)}
                           className={`pl-8 pr-4 py-2 text-xs cursor-pointer flex items-center
                             ${activeId === child.id 
                               ? 'text-tech-600 font-bold bg-white' 
                               : 'text-slate-500 hover:text-tech-600'
                             }`}
                         >
                           <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 opacity-50"></span>
                           {child.name}
                         </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 min-h-[500px]">
            {!activeNode && (
               <div className="flex items-center justify-center h-full text-slate-400">Select a category</div>
            )}

            {/* Introduction View (Brand / Level 1) */}
            {activeNode && activeNode.type === 'brand' && (
              <div className="animate-fade-in">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                        <Grid className="mr-3 text-tech-500" />
                        {activeNode.name}
                    </h2>
                </div>

                {/* Description at Top */}
                {activeNode.description && (
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">简介 (Introduction)</h3>
                        <p className="text-slate-600 leading-relaxed">
                            {activeNode.description}
                        </p>
                    </div>
                )}

                {/* Grid of Children (Series) - Matches Left Sidebar Sub-content */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                  {activeNode.children?.map((child) => (
                    <div 
                      key={child.id} 
                      onClick={() => handleChildClick(child)}
                      className="group bg-white border border-slate-200 rounded-lg hover:shadow-lg hover:border-tech-400 transition-all duration-300 flex flex-col overflow-hidden relative cursor-pointer"
                    >
                      <div className="relative aspect-video bg-slate-50 p-4 flex items-center justify-center overflow-hidden group-hover:bg-slate-100 transition-colors">
                         {child.imgUrl ? (
                           <img src={child.imgUrl} alt={child.name} className="w-full h-full object-cover" />
                         ) : (
                           <Database className="w-12 h-12 text-slate-300 group-hover:text-tech-500 transition-colors" />
                         )}
                      </div>
                      <div className="p-4 bg-white text-center border-t border-slate-100">
                        <h3 className="text-slate-800 font-bold text-sm group-hover:text-tech-600 transition-colors">{child.name}</h3>
                      </div>
                    </div>
                  ))}
                  
                  {(!activeNode.children || activeNode.children.length === 0) && (
                      <div className="col-span-full py-10 text-center text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                          暂无系列 (No Series Available)
                      </div>
                  )}
                </div>
              </div>
            )}

            {/* Table View (Model / Level 2) */}
            {activeNode && activeNode.type === 'model' && (
              <div className="animate-fade-in">
                 <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center">
                        <Database className="mr-3 text-tech-500" />
                        {activeNode.name}
                    </h2>
                </div>

                {/* Description for Model Level */}
                {activeNode.description && (
                  <div className="bg-slate-50 border-l-4 border-tech-500 p-4 mb-6 rounded-r-lg">
                    <p className="text-slate-600 text-sm leading-relaxed">{activeNode.description}</p>
                  </div>
                )}

                {/* New Multi-column Table Render */}
                {activeNode.tableData ? (
                  <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-x-auto mb-8">
                    <table className="w-full text-sm text-left border-collapse min-w-[800px]">
                      <thead className="bg-[#e2e8f0] text-slate-700 font-bold border-b border-slate-300">
                        <tr>
                          {activeNode.tableData.headers.map((header, idx) => (
                            <th key={idx} className="px-6 py-4 whitespace-nowrap">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {activeNode.tableData.rows.map((row, rowIdx) => (
                          <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
                            {row.map((cell, cellIdx) => (
                              <td 
                                key={cellIdx} 
                                className={`px-6 py-4 ${cellIdx === 0 ? 'text-[#dc2626] font-medium' : 'text-slate-600'}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {activeNode.tableData.rows.length === 0 && (
                      <div className="p-8 text-center text-slate-400">No data available</div>
                    )}
                  </div>
                ) : (
                  /* Fallback for old spec format if needed, or other brands */
                  <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden mb-8">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-3 w-1/3">Parameter</th>
                                <th className="px-6 py-3">Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {activeNode.specs?.map((row, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 font-medium text-slate-700 bg-slate-50/30">{row.label}</td>
                                    <td className="px-6 py-4 text-slate-600">{row.value}</td>
                                </tr>
                            ))}
                            {(!activeNode.specs || activeNode.specs.length === 0) && (
                                <tr>
                                    <td colSpan={2} className="px-6 py-8 text-center text-slate-400">
                                        No specification data available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                )}
                
                <div className="p-4 bg-blue-50 text-blue-800 text-sm rounded-lg border border-blue-100">
                    <p><strong>Note:</strong> Specifications are subject to change without notice. Please contact sales for the latest datasheet.</p>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;