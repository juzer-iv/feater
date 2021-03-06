import {Component, Input, Output, EventEmitter} from '@angular/core';
import {
    DefinitionSourceFormElement,
    BeforeBuildTaskFormElement,
    TaskFormElement,
    InterpolateTaskFormElement,
} from '../../recipe-form/definition-recipe-form.model';


@Component({
    selector: 'app-definition-add-source-form-element',
    templateUrl: './definition-add.source-form-element.component.html',
    styles: []
})
export class DefinitionAddSourceFormElementComponent {

    @Input() source: DefinitionSourceFormElement;

    @Output() deleteSource: EventEmitter<DefinitionSourceFormElement> =
        new EventEmitter<DefinitionSourceFormElement>();

    delete(): void {
        this.deleteSource.emit(this.source);
    }

    isBeforeBuildTaskCopy(beforeBuildTask: BeforeBuildTaskFormElement): boolean {
        return ('copy' === beforeBuildTask.type);
    }

    isBeforeBuildTaskInterpolate(beforeBuildTask: BeforeBuildTaskFormElement): boolean {
        return ('interpolate' === beforeBuildTask.type);
    }

    addBeforeBuildTaskCopy(): void {
        this.source.beforeBuildTasks.push(<TaskFormElement>{
            type: 'copy',
            sourceRelativePath: '',
            destinationRelativePath: ''
        });
    }

    addBeforeBuildTaskInterpolate(): void {
        this.source.beforeBuildTasks.push(<InterpolateTaskFormElement>{

            type: 'interpolate',
            relativePath: ''
        });
    }

    deleteBeforeBuildTask(beforeBuildTask: BeforeBuildTaskFormElement): void {
        const index = this.source.beforeBuildTasks.indexOf(beforeBuildTask);
        if (-1 !== index) {
            this.source.beforeBuildTasks.splice(index, 1);
        }
    }
}
