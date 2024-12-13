import { ResourcesContainer } from '@/components/midterm';
import {
    midtermsActivityData,
    midtermsAssignmentData,
    midtermsGroupActivityData,
} from '@/data';

export default function Introduction() {
    return (
        <div className="w-full flex flex-col gap-6">
            <ResourcesContainer
                data={midtermsAssignmentData}
                title="ASSIGNMENTS"
                desc="The assignments in this elective have strengthened my foundational understanding of Data Science and programming concepts. Each task offered valuable insights and hands-on experience, enabling me to build essential skills in analysis and problem-solving that are critical in this field."
            />
            <ResourcesContainer
                data={midtermsActivityData}
                title="INDIVIDUAL ACTIVITIES"
                desc="The individual activities during this midterm period provided a valuable opportunity to learn and apply various concepts in data science and R programming. Each activity focused on a specific topic, allowing me to explore different techniques and tools while enhancing my problem-solving skills. These tasks not only improved my technical knowledge but also helped me build confidence in tackling practical challenges independently"
            />
            <ResourcesContainer
                data={midtermsGroupActivityData}
                title="GROUP ACTIVITIES"
                desc="This group activity was a practical exercise that required us to work together to solve a real-world problem using big data and data science. Collaborating with my team allowed us to divide tasks efficiently and contribute different ideas to complete the activity effectively."
            />
        </div>
    );
}
